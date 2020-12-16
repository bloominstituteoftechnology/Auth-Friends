import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Form from './Form';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(response => {
                setFriends(response.data);
                console.log(friends);
            })
            .catch(error => console.error(error));
    },[]);

    return (
        <div>
            <Form setFriends={setFriends} />
            {friends.map(friend => (
                <div key={friend.id}>
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            ))}
        </div>
    );
};

export default FriendsList;