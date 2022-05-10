import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/landingPage.css';

import Header from './Header';

function LandingPage() {

    const emptyUser = {
        username: '',
        password: ''
    }

    const [userDetails, setUserDetails] = useState(emptyUser);
    
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserDetails({
            ...userDetails, [name]: value
        });
    }
    
    console.log(userDetails);

    return (
        <div className="main-container">
            <Header />
            <div className="main">
                <div className="left-main">
                <div className='form-wrapper'>
                    <h3>Sign In</h3>
                    <form>
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
                                onChange={(e) => handleChange(e)}
                            />
                            <label>Password</label>
                        </div>
                        <Link to='/setup'><input type='submit' value='Login'/></Link>
                        <h4>Don't have an account?</h4>
                        <p><Link to='/register'>Sign Up HERE!</Link></p>
                    </form>
                </div>
                </div>
                <div className="right-main">
                    <div className='square-dash'></div>
                    <div className='border'></div>
                    <div className='square'>
                        ?
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default LandingPage;