import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, deleteFriend } from '../actions';

class Friends extends Component {

	componentDidMount() {
		// console.log('****componentDidMount');
		this.props.getFriends();
	}

	// deleteFriendHandler = (params) => {
	// 	console.log('*******params', params);
	// 	this.props.deleteFriend(1);
	// }

	render() {
		// console.log('****render props', this.props);
		return (
			<div className='Friends'>
				{this.props.fetchingFriends ? (<h2>Loading...</h2>) : (
					<ul className='Friends-grid'>
						{this.props.friends.map((friend, index) => {
							return (
								<div key={index}>
									<li className="Friend">
										<div className="Friend-name">{friend.name}</div>
										<div className="Friend-age">{`Age: ${friend.age}`}</div>
										<div className="Friend-email">{`Email: ${friend.email}`}</div>
									</li>
									<button onClick={() => this.props.deleteFriend(index)}>Delete</button>
								</div>
							);
						})}
					</ul>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log('*****mapStateToProps state', state);
	return {
		friends: state.friendsReducer.friends,
		fetchingFriends: state.friendsReducer.fetchingFriends,
		error: state.friendsReducer.error,
		deletingFriends: state.friendsReducer.deletingFriends
	}
}

export default connect(mapStateToProps, { getFriends, deleteFriend })(Friends);
