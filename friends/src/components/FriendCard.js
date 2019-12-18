import React from "react";
import { Link, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import FriendDetail from "./FriendDetail";

import "./css/Friends.css";


const FriendCard = props => {
	const { friend } = props;
	return (
		<div>
			<Link to="friends/detail" className="card">
				<div className="left">
				<h4>{friend.name}</h4>
				<h6>{friend.email}</h6>
				</div>
				<h1 className="right">{friend.age}</h1>
			</Link>
			<Switch>
			<PrivateRoute exact path="/friends/detail" component={FriendDetail} />
			</Switch>
		</div>
	);
};

export default FriendCard;