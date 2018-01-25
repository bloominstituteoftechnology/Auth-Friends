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
					<ul className='Friends-grid'>
						{this.props.friends.map((friend, index) => {
							return (
								<li key={index} className="Friend">
									<div className="Friend-name">{friend.name}</div>
									<div className="Friend-age">{`Age: ${friend.age}`}</div>
									<div className="Friend-email">{`Email: ${friend.email}`}</div>
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
		friends: state.friendsReducer.friends,
		fetchingFriends: state.friendsReducer.fetchingFriends,
		error: state.friendsReducer.error
	}
}

export default connect(mapStateToProps, { getFriends })(Friends);
