import React from 'react';
import IndividualFriend from '../views/IndividualFriendView.js';

const FriendList = props => {
	return (
		<div>
			{props.friends.map(friend => {
				return (
					<div key={friend.id}>
						<IndividualFriend friend={friend} />
					</div>
				);
			})}
		</div>
	);
};

export default FriendList;
