import { useEffect } from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { setLoginStatus, setFriends, setToken } from "./store";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import NewFriend from "./components/NewFriend";

function App() {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token);
	const friends = useSelector((state) => state.friends);
	const history = useHistory();

	const api = axios.create({
		baseURL: "http://localhost:5000/api/",
		headers: {
			Authorization: token,
		},
	});

	useEffect(() => {
		if (localStorage.getItem("token")) {
			dispatch(setToken(localStorage.getItem("token")));
		}
	}, []);

	useEffect(() => {
		if (token) {
			dispatch(setLoginStatus(true));
			api
				.get("friends")
				.then((res) => dispatch(setFriends(res.data)))
				.catch((err) => console.error(err));
		}
	}, [token]);

	const handleLogin = (username, password) => {
		axios
			.post("http://localhost:5000/api/login", {
				username: username,
				password: password,
			})
			.then((res) => {
				localStorage.setItem("token", res.data.payload);
				dispatch(setToken(res.data.payload));
				history.push("/");
			})
			.catch((err) => console.error(err));
	};

	const handleNewFriend = (friend) => {
		api
			.post("friends", friend)
			.then((res) => {
				dispatch(setFriends(res.data));
				history.push("/");
			})
			.catch((err) => console.error(err));
	};

	return (
		<div>
			<Navbar>
				<Navbar.Brand as={Link} to="/">
					Auth Friends
				</Navbar.Brand>
				<Nav>
					<Nav.Link as={Link} to="/new">
						New
					</Nav.Link>
				</Nav>
				<Nav className="ml-auto">
					<Nav.Link as={Link} to="/login">
						Login
					</Nav.Link>
				</Nav>
			</Navbar>
			<Switch>
				<PrivateRoute exact path="/">
					<FriendList friends={friends} />
				</PrivateRoute>
				<PrivateRoute path="/new">
					<NewFriend handleNewFriend={handleNewFriend} />
				</PrivateRoute>
				<Route path="/login">
					<Login handleLogin={handleLogin} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
