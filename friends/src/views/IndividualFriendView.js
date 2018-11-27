import React from 'react';
import IndividualFriend from '../components/IndividualFriend.js';
import { updateFriend, deleteFriend } from '../actions/index.js';
import { connect } from 'react-redux';

class IndividualFriendView extends React.Component {
	constructor(props) {
		super(props);
		console.log('proppies' + this.props);
		this.state = {
			name: this.props.friend.name,
			age: this.props.friend.age,
			email: this.props.friend.email,
			id: this.props.friend.id
		};
	}

	//change handler, pass down
	changeHandlerName = e => {
		this.setState({ name: e.target.value });
	};
	changeHandlerAge = e => {
		this.setState({ age: e.target.value });
	};

	changeHandlerEmail = e => {
		this.setState({ email: e.target.value });
	};
	//submit handler, pass down

	submitHandler = e => {
		e.preventDefault();
		this.props.updateFriend(this.state);
	};

	deleteHandler = e => {
		e.preventDefault();
		this.props.deleteFriend(this.state);
	};

	render() {
		console.log('props=' + this.props.friend.name);
		return (
			<IndividualFriend
				friendName={this.state.name}
				friendAge={this.state.age}
				friendEmail={this.state.email}
				changeHandlerName={this.changeHandlerName}
				changeHandlerAge={this.changeHandlerAge}
				changeHandlerEmail={this.changeHandlerEmail}
				submitHandler={this.submitHandler}
				deleteHandler={this.deleteHandler}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(
	mapStateToProps,
	{ updateFriend, deleteFriend }
)(IndividualFriendView);
