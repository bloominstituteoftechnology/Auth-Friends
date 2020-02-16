import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Friends from "./components/Friends";
import Edit from "./components/Edit";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<ul>
					<li>
						<Link to="/login">Log In</Link>
					</li>
					<li>
						<Link to="/friends">Friends List</Link>
					</li>
					<li>
						<Link to="/edit/friends">Edit Friends</Link>
					</li>
				</ul>
			</header>
			<Switch>
				<Route path="/login" component={Login} />
				<ProtectedRoute exact path="/friends" component={Friends} />
				<ProtectedRoute exact path="/edit/friends" component={Edit} />
			</Switch>
		</div>
	);
}

export default App;
