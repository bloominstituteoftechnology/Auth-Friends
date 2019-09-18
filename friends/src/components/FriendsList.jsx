import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend';
import AddFriend from './AddFriend';

function FriendsList() {
	
	const [friends, setFriends] = React.useState([]);

	React.useEffect(() => {
		axiosWithAuth().get("/friends")
			.then(res => setFriends(res.data))
	}, [])

	function updateFriends(arr) {
		setFriends(arr)
	}

	if(friends.length === 0){
		return(
			<div>
				<h1>Loading</h1>
			</div>
		)
	}
	return (
		<div>
			<h1>Your Friends List</h1>
			<AddFriend updateFriends={updateFriends}/>
			<div>
				{friends.map(friend => {
					return <Friend key={friend.id} friend={friend}/>
				})}
			</div>
		</div>
	)
}

export default FriendsList;