import { React, useState, useEffect } from 'react';

import '../styles/quizPage.css';

import Header from "./Header";
import TimerBar from './TimerBar';



function QuizPage(props) {
    
    const { category, questions, startTime } = props;

    const firstIndex = 0;

    const emptyQuizDetails = {
        streak: 0,
        category: category,
        elapsedTime: '000s'
    }

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(firstIndex);
    const [answers, setAnswers] = useState([]);
    const [quizDetails, setQuizDetails] = useState(emptyQuizDetails);
    const [endTime, setEndTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [correct, setCorrect] = useState(false);

    const shuffleAnswers = (answers) => {
        return answers.sort((a, b) => 0.5 - Math.random());
    }
    
    const getAnswers = (question) => {
        let answers = [];
        answers.push(question.correctAnswer);
        for (let i = 0; i < question.incorrectAnswers.length; i++) {
            answers.push(question.incorrectAnswers[i]);
        }
        const shuffledAnswers = shuffleAnswers(answers);
        setAnswers(shuffledAnswers);
    }

    useEffect(() => {
        if (questions[currentQuestionIndex]) {
            getAnswers(questions[currentQuestionIndex]);
        }
    }, [questions, currentQuestionIndex]);

    useEffect(() => {
        if (gameOver) {
            const gameTime = (endTime - startTime) / 1000;
            setQuizDetails({
                ...quizDetails, elapsedTime: gameTime
            })
        }
    }, [gameOver])

    console.log(quizDetails);

    const handleUserChoice = (e) => {
        e.preventDefault();
        const userAnswer = e.target.value.slice(3);
        const realAnswer = questions[currentQuestionIndex].correctAnswer;
        if (userAnswer === realAnswer) {
            setCorrect(true);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setQuizDetails({
                ...quizDetails, streak: quizDetails.streak + 1
            })
        }
    }

    return(
        <div className="main-container" >
            <Header />
            <div className="quiz-main">
                <TimerBar setEndTime={setEndTime} setGameOver={setGameOver} correct={correct} setCorrect={setCorrect}/>
                <div className='question'>
                    {questions[currentQuestionIndex] && <h2>{questions[currentQuestionIndex].question}</h2>}
                </div>
                
                    <div className='mcq-answers'>
                        <form>
                            <input 
                                type='button'
                                id='mcq-answer' 
                                value={`A) ${answers[0]}`}
                                onClick={(e) => handleUserChoice(e)}
                            />
                            <input 
                                type='button'
                                id='mcq-answer'
                                value={`B) ${answers[1]}`}
                                onClick={(e) => handleUserChoice(e)}
                            />
                            <input 
                                type='button'
                                id='mcq-answer' 
                                value={`C) ${answers[2]}`}
                                onClick={(e) => handleUserChoice(e)}
                            />
                            <input 
                                type='button'
                                id='mcq-answer'
                                value={`D) ${answers[3]}`}
                                onClick={(e) => handleUserChoice(e)}
                            />
                        </form>
                    </div>
                
            </div>
        </div>
    )
}

export default QuizPage;