import React, { Component } from 'react';
import Friend from "./Friend";
import FriendForm from "./FriendForm";
  class App extends Component {
	render() {
		return (
		<div className="App">
        <FriendForm />
        <Friend />
		</div>
		);
	}
}
 export default App;