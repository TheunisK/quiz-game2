import '../styles/quizPage.css';
   
import { React, useState, useEffect } from 'react';


function TimerBar(props) {

    const containerStyles = {
      width: '94%',
      height: '20px',
      border: '1px solid var(--clr-blueMunsell)',
      borderRadius: '20px'
    }

    const progressStyles = {
      width: '0%',
      height: '100%',
      backgroundColor: 'var(--clr-dodgerBlue)',
      borderRadius: '19px',
      transition: '5s'
    }

    const { setEndTime, setGameOver, correct, setCorrect } = props;
    
    const [percent, setPercent] = useState(0);

    useEffect(() => {
      const progress = setTimeout(() => {
        setPercent(percent + 0.1);
      }, 5)
      if (percent >= 100) {
        clearTimeout(progress);
        setEndTime(new Date());
        setGameOver(true);
      }
      setCorrect(false);
    }, [percent, correct]);

    return (
        <div className="timer-bar-container" style={containerStyles}>
            <div className="progress" style={progressStyles}></div>
        </div>
    );
};

export default TimerBar;