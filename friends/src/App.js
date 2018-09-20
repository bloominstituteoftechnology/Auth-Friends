// React
import React, { Component } from 'react';

// Dependencies
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

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
				<Link to = '/'>Home</Link>
				<Link to = '/postfriendform'>Post New Friend</Link>

				<Route exact path = '/' render = { () => this.props.fetchingFriendsList ? <p>Fetching your friends list...</p> : <FriendsListView /> } />

				<Route path = '/postfriendform' render = { props => <PostFriendFormView {...props} /> } />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	fetchingFriendsList: state.friendsListReducer.fetchingFriendsList,
	fetchingFriendsListError: state.friendsListReducer.fetchingFriendsListError
});

export default connect (mapStateToProps, { getFriendsList })(App);
