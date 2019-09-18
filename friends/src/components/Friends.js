import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import axiosAuth from '../utilities/Authorization';
import FriendsList from './FriendsList';
import Card from './Card';

const Friends = (props) => {
    const [friendsList, setFriendsList] = useState([]);

    const getFriends = () => {
        axiosAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            setFriendsList(res.data);
        })
        .catch(err => console.log(err.response));
    };

    useEffect(() => {
        getFriends();
    }, []);

    const addFriend = friend => {
        axiosAuth().post('http://localhost:5000/api/friends', friend)
        .then(res => setFriendsList(res.data))
        .catch(err => console.log(err.response));
    };

    const deleteFriend = id => {
        // console.log(id);
        axiosAuth().delete(`http://localhost:5000/api/friends/${id}`)
            .then(res => setFriendsList(res.data))
            .catch(err => console.log(err.response));
    };

    return (
        <div>
            <h2>Friends</h2>
            <FriendsList submitFriend={addFriend}/>
            {friendsList.map(friend => {
                return <Card key={friend.id}
                             friend={friend}
                             deleteFriend={deleteFriend}/>;
            })}
        </div>
    );
};

export default Friends;