import React, { useEffect, useRef } from 'react';
import { connect }         			from 'react-redux';
import { Switch, Route, Redirect }  from 'react-router-dom';

import Header 			  from './components/header/header';
import HomePage 		  from './pages/homepage/homepage';
import ShopPage 		  from './pages/shop/shop';
import SignInSignUpPage   from './pages/sign-in-sign-up/sign-in-sign-up';
import { auth, creatreUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user-actions';

import './App.css';

function App(props) {
	const { setCurrentUser } = props;
	// SET SUBSCRIPTION IN THIS VARIABLE
	const unsubscribeFromAuth = useRef(null);

	// CHECK AUTH STATUS ON STATE CHANGE
	useEffect(() => {
		// USERAUTH IS THE OBJECT DATA FROM GOOGE OF THE USER
		unsubscribeFromAuth.current = auth.onAuthStateChanged(async userAuth => {
			// IF USER IS LOGGED IN
			if (userAuth) 
			{
				// CREATE THE USER IN THE DATABASE BASED ON THE GOOGLE OBJECT DATA
				const userRef = await creatreUserProfileDocument(userAuth);
				// LISTEN TO CHANGES IN THE DATABASE
				userRef.onSnapshot(snapShot => {
					// PASS THE DATA TO THE PROPS DISPATCH FUNCTION
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			}
			
			// SET CURRENT USE TO GOOGLE DATA
			setCurrentUser(userAuth);
		});

		// CLOSE THE SUBSCRIPTION ON UNMOUNT
		return () => unsubscribeFromAuth();
	}, [setCurrentUser]);

	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route exact path='/signin' render={() => props.currentUser ? <Redirect to='/' /> : <SignInSignUpPage />} />
			</Switch>
		</React.Fragment>
	);
}

// SPECIFY WHICH REDUCERS THIS COMPONENT MIGHT NEED
const mapStateToProps = ({ user }) => ({
	// GET THE STATE OBJECT OF THE REDUCER
	currentUser: user.currentUser
});

// SPECIFY WHICH ACTIONS THIS COMPONENT MIGHT NEED
const mapDispatchToProps = dispatch => ({
	// DISPATCH THE OBJECT THAT HAS BEEN RETURNED FROM THE ACTION FUNCTION
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

// SET FIRST ARGUMENT TO NULL BECAUSE WE DONT USE THE STATE FROM THE REDUCER IN THIS COMPONENT
export default connect(mapStateToProps, mapDispatchToProps)(App);
