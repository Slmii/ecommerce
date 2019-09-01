import React, { useState } from 'react';

import CustomButton from '../custom-button/custom-button';
import FormInput    from '../form-input/form-input';
import { auth, creatreUserProfileDocument } from '../../firebase/firebase.utils';

import './signup.scss';

function SignUp() {
    const [signInData, setSignInData] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });
    const { displayName, email, password, confirmPassword } = signInData;

    const handleSubmit = async e => {
        e.preventDefault();

        if (password !== confirmPassword) 
        {
            alert('Password do not match!');
            return false;
        }

        try {
            // CREATE A NEW USER
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await creatreUserProfileDocument(user, { displayName });
            
            setSignInData({ displayName: '', email: '', password: '', confirmPassword: '' });
        } catch (error) {
            // Handle Errors here.
            const errorCode    = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        }
    };

    const handleOnchange = e => {
        const { value, name } = e.target;
        setSignInData(prevState => ({ ...prevState, [name]: value }));
    };
    
    return (
        <div className='sign-up'>
            <h2>I do not have an account</h2>
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