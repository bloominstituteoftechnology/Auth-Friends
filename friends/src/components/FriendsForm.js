import React, { useState } from "react";
import { axiosWithAuth } from '../axiosWithAuth';

const  FriendsForm = () => {
    const [moreFriends, setMoreFriends] = useState({
        name: '',
        age: '',
        email:'',
    })
    const handleChange = e => { 
        e.preventDefault();
        setMoreFriends({
            ...moreFriends,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', moreFriends)
            .then(res => {
                console.log(res);
                setMoreFriends({name: '', age: '', email: ''})
            });
        };
        return(
            <form onSubmit={handleSubmit}>
                <input
                required
                type='text'
                name='name'
                id='name'
                placeholder='The Friends TV show is not funny'
                onChange={handleChange}
                value={moreFriends.name}
                />
                 <input
                required
                type='text'
                name='age'
                id='age'
                placeholder='You are too old for this show'
                onChange={handleChange}
                value={moreFriends.age}
                />
                 <input
                required
                type='text'
                name='email'
                id='email'
                placeholder='youremail@aol.com cause its the 90'
                onChange={handleChange}
                value={moreFriends.email}
                />
                <button type='submit'>More Friends</button>
            </form>    
        )
};

export default FriendsForm;