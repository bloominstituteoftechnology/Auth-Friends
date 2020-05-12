import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
	return (
		<Router>
			<div className='App'>
				<ul className='nav'>
					<li>
						<Link to='/login' className="link">Login </Link>
					</li>
					<li>
						<Link to='/protected' className="link">Profile </Link>
					</li>
				</ul>
				<h2>Welcome to Friends</h2>
				<Switch>
					<PrivateRoute exact path='/protected' component={Profile} />
					<Route path='/login' component={Login} />
					<Route component={Login} />
				</Switch>
			</div>
		</Router>
		// <Profile/>
	);
}

export default App;
