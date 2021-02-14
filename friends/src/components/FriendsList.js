import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    name='name'
                    value={newFriend.name}
                    onChange={handleChange}
                />
                <input 
                    name='age'
                    value={newFriend.age}
                    onChange={handleChange}
                />
                <input 
                    name='email'
                    value={newFriend.email}
                    onChange={handleChange}
                />
                <button>Add Friend</button>
            </form>
            {friends.map(friend => (
                <h4 key={friend.id}>{friend.name}</h4>
            ))}
        </div>
    );
};

export default FriendsList;