import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

    const FriendsForm = props => {
        const [newFriend, setNewFriend] = useState({
            id: 0, 
            name: '',
            age: 0,
            email:'',
        });

        const handleChange = e => {
            setNewFriend(
                {
                    ...newFriend,
                    [e.target.name]: e.target.value
                }
            );
        };

    const addFriend = e => {
        e.preventDefault();
    
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            console.log('success', res);
            localStorage.setItem('token', res.data.payload);
            props.history.push('/protected/list');
        })
        .catch(err => console.log(err));
    };

        return (
            <div>
                <form onSubmit={addFriend}>
                <input
                    type="text"
                    name="name"
                    value={props.age}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="age"
                    value={props.age}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    value={props.email}
                    onChange={handleChange}
                />
                <button>Add New Friend</button>
                </form>
            </div>
            );
    };
    
    export default FriendsForm;