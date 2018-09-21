// React
import React, { Component } from 'react';

// Dependencies
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';

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
				<header>
					<h1>Friends</h1>

					<div className = 'link-div'>
						<NavLink activeClassName = 'active-link' exact to = '/'>Go Home</NavLink>
						<NavLink activeClassName = 'active-link' to = '/friendslist'>View Friends List</NavLink>
						<NavLink activeClassName = 'active-link' to = '/postfriendform'>Post New Friend</NavLink>
					</div>
				</header>

				<p>{ this.props.fetchingFriendsListError }</p>
				<p>{ this.props.postingNewFriendError }</p>
				<p>{ this.props.puttingNewFriendError }</p>

				<Route exact path = '/' component = { () => <h3>Welcome to your Friends List!</h3> } />

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
