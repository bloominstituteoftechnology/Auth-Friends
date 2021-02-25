import React from "react";
import "./App.css";
import { axiosAuth } from "./axios/axioswithauth";
import { Link, Route,BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import DeleteUser from "./DeleteUser";
import Login from "./Login";
import FriendList from "./FriendList";
import UpdateUser from "./updateuser";

import CreateUser from "./CreateUser";
function App() {
	const logout = () => {
		axiosAuth()
			.post("/logout")
			.then((res) => {
				localStorage.removeItem("token");
				window.location.href = "/login";
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
    <BrowserRouter>
			<div className="App">
				<Link to="./login">Login</Link>
				<Link onClick={logout}>Logout</Link>
				<li>
					{localStorage.getItem("token") && (
						<Link to="/protected">Protected Page</Link>
					)}
				</li>
				<li>
					{localStorage.getItem("token") && (
						<Link to="/protected/user">Protected User Page</Link>
					)}
				</li>

					<PrivateRoute
						exact
						path="/protected"
						component={FriendList}
					/>
					<PrivateRoute
						exact
						path="protected/user"
						component={CreateUser}
					/>{" "}
					
					<PrivateRoute
						exact
						path="protected/user"
						component={UpdateUser}
					/>
					
					<PrivateRoute
						exact
						path="protected/user"
						component={DeleteUser}
					/>
					
					<Route path="/login" component={Login} />
					<Route component={Login} />
					<Route path="/protected/user" component={FriendList} />
			</div>
      </BrowserRouter>
	);
}

export default App;
