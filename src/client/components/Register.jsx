import {React, useState} from 'react';
import { useNavigate } from "react-router-dom";

import '../styles/register.css';

import Header from './Header';

const URL = process.env.REACT_APP_API_URL;
const registerEndpoint = 'user/register';
const registerUrl = URL + registerEndpoint;

function Register() {

    const emptyUser = {
        email: "",
        username: "",
        password: ""
    }

    const [userDetails, setUserDetails] = useState(emptyUser);
    const navigate = useNavigate();

    const postRegister = async (url, userDetails) => {
        console.log("HELLO", url);
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails)
        });
        const registeredUser = await res.json();
        console.log(registeredUser);
        return registeredUser;
    }


    function handleChange(e) {
        const { value, name } = e.target;
        setUserDetails({
            ...userDetails, [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resData = postRegister(registerUrl, userDetails);

        if (resData) {
            navigate('/setup');
        }
    }

    return (
        <div className='register-page'>
            <Header />
            <div className='register-main'>
                <div className='form-wrapper'>
                    <h3>Register</h3>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className='text-field'>
                            <input 
                                name='username'
                                type='text'
                                value={userDetails.username}
                                required
                                onChange={(e) => handleChange(e)}
                            />
                            <label>Username</label>
                        </div>
                        <div className='text-field'>
                            <input
                                name='password' 
                                type='password'
                                value={userDetails.password} 
                                required
                                onChange = {(e) => handleChange(e)}
                            />
                            <label>Password</label>
                        </div>
                        <div className='text-field'>
                            <input
                                name='email' 
                                type='email'
                                value={userDetails.email} 
                                required
                                onChange = {(e) => handleChange(e)}e
                            />
                            <label>Email</label>
                        </div>
                        <input type='submit' value='Register'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;