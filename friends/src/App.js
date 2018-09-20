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
				{ this.props.fetchingFriendsList ? <p>Fetching your friends list...</p> : <FriendsListView friendsList = { this.props.friendsList } /> }

				{/* { this.props.fetchingFriendsListError === '' ? null : <p>{ this.props.fetchingFriendsListError }</p>} */}
				<p>{ this.props.fetchingFriendsListError }</p>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	friendsList: state.friendsListReducer.friendsList,
	fetchingFriendsList: state.friendsListReducer.fetchingFriendsList,
	fetchingFriendsListError: state.friendsListReducer.fetchingFriendsListError
});

export default connect (mapStateToProps, { getFriendsList })(App);
