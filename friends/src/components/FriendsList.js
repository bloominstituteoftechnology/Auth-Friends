import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import Form from './Form';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(response => {
                setFriends(response.data);
            })
            .catch(error => console.error(error));
    },[]);

    return (
        <div>
            <Form setFriends={setFriends} />
            {friends.map((friend, index) => (
                <Friend key={index} friend={friend} />
            ))}
        </div>
    );
};

export default FriendsList;