// React
import React, { Component } from 'react';

// Dependencies
import { connect } from 'react-redux';

// Components
import { FriendsListView } from './views';

// Actions
import { getFriendsList } from './store/actions';

// Styles
import './App.css';

class App extends Component {
	componentDidMount() {
		this.props.getFriendsList();
	}

	myFunc = e => {
		e.preventDefault();
		console.log('my funk');
	}

	render() {
		return (
			<div className="App">
				<FriendsListView myFunc = { this.myFunc } />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	friendsList: state.friendsList
});

export default connect (mapStateToProps, { getFriendsList })(App);
