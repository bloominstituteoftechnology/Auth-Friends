import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Friends from "./components/Friends";
import Edit from "./components/Edit";
import ProtectedRoute from "./utils/ProtectedRoute";


const links = {
	color: "#f5bf60",
	textShadow: "-1px 0 gold, 0 1px black, 1px 0 black, 0 -1px black",
};

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<nav>
						<Link to="/login" style={links}>
							Log In
						</Link>
						<Link to="/friends" style={links}>
							Friends List
						</Link>
						<Link to="/edit-friends" style={links}>
							Add Friends
						</Link>
					</nav>
					<div className="background"></div>
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
