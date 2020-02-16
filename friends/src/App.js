import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Friends from "./components/Friends";
import Edit from "./components/Edit";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<nav>
						<Link to="/login">Log In</Link>
						<Link to="/friends">Friends List</Link>
						<Link to="/edit-friends">Edit Friends</Link>
					</nav>
				</header>
				<Switch>
					<ProtectedRoute exact path="/edit-friends" component={Edit} />
					<ProtectedRoute exact path="/friends" component={Friends} />
					<Route path="/login" component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
