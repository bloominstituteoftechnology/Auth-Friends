import React, { Component } from 'react';
import './App.css';
import FriendsContainer from './Component/FriendsContainer';
import FriendsForm from './Component/FriendsForm';
import Navigation from './Component/Navigation';
import { connect } from 'react-redux';
import { fetchFriends } from './Action';

import { Route } from 'react-router-dom';

class App extends Component {
	componentDidMount() {
		this.props.fetchFriends();
	}

	render() {
		return (
			<div className="App">
				<Route path="/" render={(props) => <Navigation {...props} />} />
				<Route exact path="/" render={() => <FriendsForm />} />
				<Route
					exact
					path="/"
					render={(props) => (
						<FriendsContainer
							friends={this.props.friends}
							{...props}
							deleteFriend={this.deleteFriend}
							updateInfo={this.updateInfo}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { friendsReducer } = state;
	return {
		friends: friendsReducer.friends,
		error: friendsReducer.error,
		fetchFriends: friendsReducer.fetchFriends
	};
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, {
	fetchFriends
})(App);
