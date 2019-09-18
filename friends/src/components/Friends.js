import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import axiosAuth from '../utilities/Authorization';
import FriendsList from './FriendsList';

const Friends = (props) => {
    const [friendsList, setFriendsList] = useState([]);
    useEffect(() => {
        axiosAuth().get('http://localhost:5000/api/friends')
        //     headers: {
        //         Authorization: localStorage.getItem('token')
        //     }
        // })
            .then(res => {
                setFriendsList(res.data);
            })
            .catch(err => console.log(err.response));
    }, []);

    const addFriend = friend => {
        axiosAuth().post('http://localhost:5000/api/friends', friend)
        .then(res => setFriendsList(res.data))
        .catch(err => console.log(err.response));
    };

    return (
        <div>
            <h2>Friends</h2>
            <FriendsList submitFriend={addFriend}/>
            {friendsList.map(friend => {
                return <div key={friend.id}>{friend.name}</div>;
            })}
        </div>
    );
};

export default Friends;