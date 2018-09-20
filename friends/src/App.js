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

	render() {
		return (
			<div className="App">
				<FriendsListView friendsList = { this.props.friendsList } />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	friendsList: state.friendsListReducer.friendsList
});

export default connect (mapStateToProps, { getFriendsList })(App);
