import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

class Friends extends Component {

	componentDidMount() {
		console.log('****componentDidMount');
		this.props.getFriends();
	}

	render() {
		console.log('****render props', this.props);
		return (
			<div className='Friends'>
				{this.props.fetchingFriends ? (<h2>Loading...</h2>) : (
					<ul>
						{this.props.friends.map((friend, index) => {
							return (
								<li key={index} className="friend">
									<div className="friend-name">{friend.name}</div>
									<div className="friend-age">{`Age: ${friend.age}`}</div>
									<div className="friend-email">{`Email: ${friend.email}`}</div>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('*****mapStateToProps state', state);
	return {
		friends: state.getFriendsReducer.friends,
		fetchingFriends: state.getFriendsReducer.fetchingFriends
	}
}

export default connect(mapStateToProps, { getFriends })(Friends);
