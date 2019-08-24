import React, { useState } from 'react';

import CustomButton from '../custom-button/custom-button';
import FormInput    from '../form-input/form-input';

import './signup.scss';

function SignUp() {
    const [signInData, setSignInData] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });
    const { displayName, email, password, confirmPassword } = signInData;

    const handleSubmit = e => {
        e.preventDefault();
        setSignInData({ displayName: '', email: '', password: '', confirmPassword: '' });
    };

    const handleOnchange = e => {
        const { value, name } = e.target;
        setSignInData(prevState => ({ ...prevState, [name]: value }));
    };
    
    return (
        <div className='sign-up'>
            <h2>I dont have an account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='displayName' 
                    type='text' 
                    label='Display Name'
                    value={displayName} 
                    required 
                    handleChange={handleOnchange}
                />
                <FormInput 
                    name='email' 
                    type='email' 
                    label='Email'
                    value={email} 
                    required 
                    handleChange={handleOnchange}
                />
                <FormInput 
                    name='password' 
                    type='password' 
                    label='Password'
                    value={password} 
                    required 
                    handleChange={handleOnchange}
                />
                <FormInput 
                    name='confirmPassword' 
                    type='password' 
                    label='Confirm Password'
                    value={confirmPassword} 
                    required 
                    handleChange={handleOnchange}
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignUp;