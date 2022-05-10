import { React } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from "./Header";

import '../styles/setup.css';

function Setup(props) {
    
    const { setCategory } = props;

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/getready');
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setCategory(value);
    }
    
    return (
        <div className="main-container">
            <Header />
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="category-container">
                    <h3>Choose a category:</h3>
                    <select onChange={e => handleChange(e)}>
                        <option value='music'>Music</option>
                        <option value='film_and_tv'>Film & TV</option>
                        <option value='general_knowledge'>General Knowledge</option>
                        <option value='science'>Science</option>
                        <option value='geography'>Geography</option>
                        <option value='sport_and_leisure'>Sport & Leisure</option>
                        <option value='food_and_drink'>Food & Drink</option>
                    </select>
                </div>
                <div className="start-button-container">
                    <button type='submit'>
                        Start Game
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Setup;