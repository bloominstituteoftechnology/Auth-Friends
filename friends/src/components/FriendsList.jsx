import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

function FriendsList() {
	
	const [friends, setFriends] = React.useState([]);

	React.useEffect(() => {
		axiosWithAuth().get("/friends")
			.then(res => setFriends(res.data))
	}, [])

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
			<div>
				{friends.map(friend => {
					return (
						<div>
							<h2>{friend.name}</h2>
							<h3>{friend.email}</h3>
							<h3>{friend.age}</h3>

						</div>
					)
				})}
			</div>
		</div>
	)
}

export default FriendsList;