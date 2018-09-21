import React, {Component}from 'react';
import { fetchFriends } from '../actions';
import { connect } from "react-redux";

class Friends extends Component {
	componentDidMount() {
		this.props.fetchFriends();
	}
	render() {
		return (
			<div className="friends-list">
				{this.props.friends.map(friend => (
					<div className="friend" key={friend.id}>
						<h3>Name: {friend.name}</h3>
						<p>Age: {friend.age}</p>
						<p>Age: {friend.email}</p>
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { friends: state.friends };
};

export default connect(
	mapStateToProps,
	{ fetchFriends }
)(Friends);