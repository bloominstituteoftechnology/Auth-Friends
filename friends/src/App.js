import React, { Component } from "react";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<AddFriend />
				<FriendList />
			</div>
		);
	}
}

export default App;
