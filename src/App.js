import React 	 		 from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import Shoppage from './pages/shop/shop';

import './App.css';

function App() {
	return (
		<React.Fragment>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/shop' component={Shoppage} />
				<Route path='/shop/hats' component={() => <div><h1>HATS</h1></div>} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
