// React
import React, { Component } from 'react';

// Dependencies
import { connect } from 'react-redux';

// Components
import { FriendsListView, PostFriendFormView } from './views';

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
				<p>{ this.props.fetchingFriendsListError }</p>

				{ this.props.fetchingFriendsList ? <p>Fetching your friends list...</p> : <FriendsListView /> }

				<PostFriendFormView />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	fetchingFriendsList: state.friendsListReducer.fetchingFriendsList,
	fetchingFriendsListError: state.friendsListReducer.fetchingFriendsListError
});

export default connect (mapStateToProps, { getFriendsList })(App);
