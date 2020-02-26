import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import AddAFriendForm from './AddAFriendForm';

function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        console.log('hello')
        axiosWithAuth()
            .get('/api/friends')
            .then(res => setFriends(res.data))
            .catch(err => alert('Error Getting Friends List', err));    
    },[]);

function getData() {
    axiosWithAuth()
    .get('/api/friends')
    .then(res => setFriends(res.data))
    .catch(err => alert('Error getting Friends List', err));
}

function addFriend(friend) {
    axiosWithAuth()
    .post('/api/friends', friend)
    .then(res => {
        getData();
        console.log(res);
    });
}

return (
    <div>
        <h1> Hello Dear Friends!</h1>
        <div className='friends'>
            {friends.map(friend => {
                return <Friend key={friend.id} friend={friend} />;
            })}
        </div>
        <AddAFriendForm addFriend={addFriend} />
    </div>
);

}

export default Friends;