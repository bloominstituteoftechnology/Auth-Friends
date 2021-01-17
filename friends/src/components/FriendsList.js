import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';
import Friend from './Friend';

function FriendsList() {
	const [friends, setFriends] = useState([]);
	const [loading, setLoading] = useState(false);
	const [displayAddForm, setDisplayAddForm] = useState(false);

	useEffect(() => {
		getFriends();
	}, []);

	const getFriends = () => {
		axiosWithAuth()
			.get('/friends')
			.then(res => {
				console.log(res.data);
				setFriends(res.data);
				setLoading(true);
			})
			.catch(err => console.log(err));
	};

	return (
		<>
			{displayAddForm && (
				<AddFriend
					displayAddForm={displayAddForm}
					setDisplayAddForm={setDisplayAddForm}
					friends={friends}
					setFriends={setFriends}
				/>
			)}
			<div className="thelist__container">
				<div className="thelist__top">
					<h1>The Friend List</h1>
					<button onClick={() => setDisplayAddForm(!displayAddForm)} className="add__friend__btn">
						+
					</button>
				</div>
				<div className="friends">
					{loading === false ? (
						<h2 className="loading">Loading...</h2>
					) : (
						<>
							{friends.map(friend => {
								return <Friend key={friend.id} friend={friend} />;
							})}
						</>
					)}
				</div>
			</div>
		</>
	);
}

export default FriendsList;
