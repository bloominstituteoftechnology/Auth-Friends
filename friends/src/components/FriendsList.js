import React from 'react';
import Friend from './Friend';
import { Main } from './../styles';

const FriendsList = (props) => {
	return (
		<Main>
			{props.friends.map((friend, index) => {
				return (
					<React.Fragment>
					<Friend
                        key={friend.id}
                        index={index}
						toggleSelected={props.toggleSelected}
						selected={friend.selected}
						friend={friend}
						id={friend.id}
						deleteFriend={props.deleteFriend}
					/>
					</React.Fragment>
				);
			})}
			
		</Main>
	);
};

export default FriendsList;
