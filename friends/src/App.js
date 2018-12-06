import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { getFriends, addFriend, deleteFriend } from "./actions";

import Form from "./components/Form";

import styled from "styled-components";

const Header = styled.header`
	position: relative;
`;

const StyledV = styled.div`
	position: absolute;
	bottom: 4%;
	margin-right: 10px;
	color: rgb(100, 100, 100, 0.4);
	font-weight: bold;
`;

const StyledX = styled.span`
  color: rgb(100, 100, 100, 0.4);
  :hover {
    cursor: pointer;
  }
`;

class App extends Component {
	componentDidMount() {
		this.props.getFriends();
	}

	render() {
		console.log("From Props", this.props);

		if (!this.props.friends.length) return <h2>Loading...</h2>;
		return (
			<div className='App'>
				<Header className='App-header'>
					{this.props.friends.map(friend => (
						<div key={friend.id}>
							{friend.name}, age {friend.age}, email:
							{friend.email}
							<StyledX
								onClick={() =>
									this.props.deleteFriend(friend.id)
								}>
								{" "}x
							</StyledX>
						</div>
					))}
					<StyledV> v </StyledV>
				</Header>
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
	{ getFriends, addFriend, deleteFriend }
)(App);
