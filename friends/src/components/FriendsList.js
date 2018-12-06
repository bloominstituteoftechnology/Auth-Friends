import React from 'react';
import Friend from './Friend';
import { Main, P, Div } from './../styles';
import FriendForm from './FriendForm';

const FriendsList = (props) => {
	return (
		<Div main>
			<P>Click a Friend to Update Details</P>
			<Main>
				{props.friends.map((friend, index) => {
					if (friend.selected === true) {
						return (
							<FriendForm
								toggleSelected={props.toggleSelected}
								selected={friend.selected}
								key={index}
								index={index}
								mode="Update"
								name={props.name}
								age={props.age}
								email={props.email}
								handleChange={props.handleChange}
								updateFriend={() => props.updateFriend(friend.id)}
							/>
						);
					} else {
						return (
							<Friend
								friends={props.friends}
								key={index}
								index={index}
								toggleSelected={props.toggleSelected}
								selected={friend.selected}
								friend={friend}
								id={friend.id}
								deleteFriend={props.deleteFriend}
							/>
						);
					}
				})}
			</Main>
		</Div>
	);
};

export default FriendsList;
