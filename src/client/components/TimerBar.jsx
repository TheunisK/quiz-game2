import '../styles/quizPage.css';
import '../styles/timerStyles.css';
   
import { React, useState, useEffect } from 'react';
import ProgressBar from "./ProgressBar";

let interval = undefined;

function TimerBar(props) {
  const { progress, setProgress, running, setRunning } = props;

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 0.1);
      }, 10);
    } else {
      clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if (progress >= 100) {
      setRunning(false);
      clearInterval(interval);
    }
  }, [progress]);

  return (
    <div className="App">
      <ProgressBar progress={progress} />
      {/* <button
        onClick={() => {
          setRunning(false);
          setProgress(0);
        }}
      >
        Clear
      </button>
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "Start"}
      </button> */}
    </div>
  );
}

export default TimerBar;