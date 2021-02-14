import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import './FriendsList.css';

function FriendsList() {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState({
        id: Math.random(),
        name: '',
        age: '',
        email: ''
    });

    const handleChange = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            console.log(res)
            setFriends(res.data)
            setNewFriend({
                id: Math.random(),
                name: '',
                age: '',
                email: ''
            })
        })
        .catch(err => console.log(err))
    };

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <div className='friendsform'>
            <form className='form' onSubmit={handleSubmit}>
                <label className='labelinput'id='name'>Name:
                    <input 
                        name='name'
                        value={newFriend.name}
                        onChange={handleChange}
                    />
                </label>
                <label className='labelinput' id='age'>Age:
                    <input 
                        name='age'
                        value={newFriend.age}
                        onChange={handleChange}
                    />
                </label>
                <label className='labelinput' id='email'>Email:
                    <input 
                        name='email'
                        value={newFriend.email}
                        onChange={handleChange}
                    />
                </label>
                <button className='btn'>Add Friend</button>
            </form>
            <div className='friends'>
                {friends.map(friend => (
                    <h4 className='friend' key={friend.id}>{friend.name}, {friend.age}, {friend.email}</h4>
                ))}
            </div>
        </div>
    );
};

export default FriendsList;