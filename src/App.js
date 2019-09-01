import React, { useEffect, useRef, useState } from 'react';
import { Switch, Route }   from 'react-router-dom';

import Header 			from './components/header/header';
import HomePage 		from './pages/homepage/homepage';
import ShopPage 		from './pages/shop/shop';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import { auth, creatreUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	
	// SET SUBSCRIPTION IN THIS VARIABLE
	const unsubscribeFromAuth = useRef(null);

	// CHECK AUTH STATUS ON STATE CHANGE
	useEffect(() => {
		unsubscribeFromAuth.current = auth.onAuthStateChanged(async userAuth => {
			// IF USER IS LOGGED OUT
			if (!userAuth) 
			{
				// SET STATE BACK TO NULL
				setCurrentUser(userAuth);
				return false;
			}

			// GET THE USER (EXISTING OR NEWLY CREATED)
			const userRef = await creatreUserProfileDocument(userAuth);
			// LISTEN TO CHANGES IN THE DATA
			userRef.onSnapshot(snapShot => {
				setCurrentUser({
					id: snapShot.id,
					...snapShot.data()
				});
			});
		});

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
