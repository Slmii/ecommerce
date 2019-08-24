import React from 'react';

import SignIn from '../../components/signin/signin';
import SignUp from '../../components/signup/signup';

import './sign-in-sign-up.scss';

function SignInSignUp() {
    return (
        <div className='signin-signup'>
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SignInSignUp;