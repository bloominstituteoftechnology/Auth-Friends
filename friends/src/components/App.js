import React, { Component } from "react";
import "./App.css";
import Friends from "./Friends";
import FriendForm from "./FriendForm";

class App extends Component {
	render() {
		return (
			<div className="App">
        <FriendForm />
        <Friends />
			</div>
		);
	}
}

export default App;
