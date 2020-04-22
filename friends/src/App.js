import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Friends from './Components/Friends';
import PrivateRoute from './Components/PrivateRoute';
import './App.css';


function App() {
	return (
		<Router>
			<div>
				<Link to="/login">Login</Link>
				<Link to="/friends">Friends</Link>
				<Switch>
					<PrivateRoute exact path="/friends" component={Friends} />
					<Route path="/login" component={Login} />
					<Route component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
