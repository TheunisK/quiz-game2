import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from "./Header";

import '../styles/getReady.css';

function GetReady(props) {
    const { category, setQuestions, setStartTime } = props;

    const url = `https://the-trivia-api.com/questions?categories=${category}&limit=20`;

    const navigate = useNavigate();

    const countdownTime = 3;

    const [timeLeft, setTimeLeft] = useState(countdownTime);

    const getQuestions = async () => {
        const res = await fetch(url);
        const questionData = await res.json();
        setQuestions(questionData);
    }

    useEffect(() => {
        getQuestions();
    }, []);

    useEffect(() => {
        const time = setTimeout(() => {
            setTimeLeft(timeLeft - 1)
        }, 1000);
        if (timeLeft === 0) {
            setStartTime(new Date());
            clearTimeout(time);
            navigate('/quiz');
        }
    }, [timeLeft]);

    return (
        <div className="main-container">
            <Header />
            <div className="countdown-container">
                <h2>Get Ready!</h2>
                <div className="countdown">
                    <h3>{timeLeft}</h3>
                </div>
            </div>
        </div>
    )
}

export default GetReady;