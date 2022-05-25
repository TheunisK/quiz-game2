import { React, useState} from 'react';
import { Routes, Route } from "react-router-dom";

import LandingPage from './client/components/LandingPage';
import Register from './client/components/Register';
import QuizPage from './client/components/QuizPage';
import GetReady from './client/components/GetReady';
import Setup from './client/components/Setup';

import './App.css';

function App() {
  const initialCategory = 'music';

  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState(initialCategory);
  const [startTime, setStartTime] = useState(null);
  const [running, setRunning] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/quiz' element={<QuizPage running={running} setRunning={setRunning} category={category} questions={questions} startTime={startTime}/>}/>
        <Route path='/getready' element={<GetReady setRunning={setRunning} category={category} setQuestions={setQuestions} setStartTime={setStartTime}/>}/>
        <Route path='/setup' element={<Setup setCategory={setCategory}/>}/>
      </Routes>
    </div>
  );
}

export default App;
