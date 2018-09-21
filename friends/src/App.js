// React
import React, { Component } from 'react';

// Dependencies
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

// Components
import { FriendsListView, PostFriendFormView, PutFriendView, PutFriendFormView } from './views';

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
				<h1>Welcome to your friends list</h1>

				<p>{ this.props.fetchingFriendsListError }</p>
				<p>{ this.props.postingNewFriendError }</p>
				<p>{ this.props.puttingNewFriendError }</p>

				<Link to = '/'>Go Home</Link><br />
				<Link to = '/friendslist'>View Friends List</Link><br />
				<Link to = '/postfriendform'>Post New Friend</Link>

				<Route exact path = '/' component = { () => <p>Click on a link</p> } />

				<Route exact path = '/friendslist' render = { () => this.props.fetchingFriendsList ? <p>Fetching your friends list...</p> : <FriendsListView /> } />

				<Route path = '/friendslist/:id' component = { PutFriendView } />

				<Route path = '/friendslist/:id/edit' component = { PutFriendFormView } />

				<Route path = '/postfriendform' render = { props => <PostFriendFormView {...props} /> } />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
	fetchingFriendsList: state.friendsListReducer.fetchingFriendsList,
	fetchingFriendsListError: state.friendsListReducer.fetchingFriendsListError,
	postingNewFriendError: state.postFriendFormReducer.postingNewFriendError,
	puttingNewFriendError: state.putFriendFormReducer.puttingNewFriendError,
}};

export default connect (mapStateToProps, { getFriendsList })(App);
