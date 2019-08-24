import React, { useEffect, useRef, useState } from 'react';
import { Switch, Route }   from 'react-router-dom';

import Header 			from './components/header/header';
import HomePage 		from './pages/homepage/homepage';
import ShopPage 		from './pages/shop/shop';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import { auth }			from './firebase/firebase.utils';

import './App.css';

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	
	// SET SUBSCRIPTION IN THIS VARIABLE
	const unsubscribeFromAuth = useRef(null);

	// CHECK AUTH STATUS ON STATE CHANGE
	useEffect(() => {
		unsubscribeFromAuth.current = auth.onAuthStateChanged(user => setCurrentUser(user));

		// CLOSE THE SUBSCRIPTION ON UNMOUNT
		return () => unsubscribeFromAuth();
	}, []);

	return (
		<React.Fragment>
			<Header currentUser={currentUser} />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route path='/signin' component={SignInSignUpPage} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
