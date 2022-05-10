
   
import { React, useState, useEffect } from 'react';
import { Line } from 'rc-progress';


function TimerBar(props) {

    const { setEndTime, setGameOver, correct, setCorrect } = props;
    
    const [percent, setPercent] = useState(0);

    useEffect(() => {
      const progress = setTimeout(() => {
        setPercent(percent + 0.1);
      }, 5)
      if (correct) {
        setPercent(percent - 5);
      }
      if (percent >= 100) {
        clearTimeout(progress);
        setEndTime(new Date());
        setGameOver(true);
      }
      setCorrect(false);
    }, [percent, correct]);

    return (
        <div className="timer-bar-container">
          <Line percent={percent} strokeWidth='1.5' strokeColor="#0197F6"/>
        </div>
    );
};

export default TimerBar;