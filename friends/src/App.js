import React, { Component } from 'react';
import FriendForm from './components/FriendForm';
import FriendList from './components/FriendList';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<FriendForm />
				<FriendList />
			</div>
		);
	}
}

export default App;
