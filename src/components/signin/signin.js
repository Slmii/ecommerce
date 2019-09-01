import React, { useState } from 'react';

import CustomButton         from '../custom-button/custom-button';
import FormInput        	from '../form-input/form-input';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './signin.scss';

function SignIn() {
    const [signInData, setSignInData] = useState({ email: '', password: '' });
    const { email, password }         = signInData;

    const handleSubmit = async e => {
        e.preventDefault();
        
        try {
            await auth.signInWithEmailAndPassword(email, password)
            
        } catch (error) {
            // Handle Errors here.
            const errorCode    = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        }
        setSignInData({ email: '', password: '' });
    };

    const handleOnchange = e => {
        const { value, name } = e.target;
        setSignInData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
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
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;