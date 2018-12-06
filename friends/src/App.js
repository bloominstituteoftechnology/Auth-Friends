import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	requestFriends,
	toggleSelected,
	deleteFriend,
	addFriend,
	updateFriend
} from './actions';
import FriendsList from './components/FriendsList';
import { GlobalStyle, H1, AppContainer } from './styles';
import FriendForm from './components/FriendForm';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friend: {
				name: '',
				age: '',
				email: ''
			}
		};
	}
	handleChange = (event) => {
		event.preventDefault();
		this.setState({
			friend: {
				...this.state.friend,
				[event.target.name]: event.target.value
			}
		});
	};

	componentDidMount() {
		this.props.requestFriends();
	}

	toggleSelected = (index) => {
		this.props.toggleSelected(index);
	};

	addFriend = (event) => {
		event.preventDefault();
		this.props.addFriend(this.state.friend);
	};

	deleteFriend = (id) => {
		this.props.deleteFriend(id);
	};

	updateFriend = (id) => {
		// event.preventDefault();
		this.props.updateFriend(this.state.friend, id);
	};

	render() {
		if (this.props.requesting === true) {
			return <H1> Data is being fetched...</H1>;
		}
		return (
			<React.Fragment>
				<GlobalStyle />
				<AppContainer>
					<H1>Add a Friend</H1>
					<FriendForm
						friend={this.state.friend}
						name={this.state.name}
						age={this.state.age}
						email={this.state.email}
						handleChange={this.handleChange}
						addFriend={this.addFriend}
						mode="Add Friend"
					/>
					<H1>Current Friends</H1>
					<FriendsList
						name={this.state.name}
						age={this.state.age}
						email={this.state.email}
						friends={this.props.friends}
						handleChange={this.handleChange}
						toggleSelected={this.toggleSelected}
						deleteFriend={this.deleteFriend}
						updateFriend={this.updateFriend}
					/>
				</AppContainer>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	friends: state.friends,
	requesting: state.requesting
});

export default connect(
	mapStateToProps,
	{
		requestFriends,
		toggleSelected,
		deleteFriend,
		addFriend,
		updateFriend
	}
)(App);
