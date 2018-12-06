import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { getFriends, addFriend } from "./actions";

import Form from "./components/Form";

class App extends Component {
	componentDidMount() {
		this.props.getFriends();
	}

	render() {
		console.log("From Props", this.props);

		if (!this.props.friends.length) return <h2>Loading...</h2>;
		return (
			<div className='App'>
				<header className='App-header'>
					{this.props.friends.map(friend => (
						<div key={friend.id}>
							{friend.name}, age {friend.age}, email:{" "}
							{friend.email}
						</div>
          ))}
          <div> V </div>
				</header>
				<Form
					addFriend={this.props.addFriend}
					title='Add Friend'
					buttonText='Add'
					inputColor='white'
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	friends: state.friends,
	isFetching: state.fetchingFriends,
	error: state.error
});

export default connect(
	mapStateToProps,
	{ getFriends, addFriend }
)(App);
