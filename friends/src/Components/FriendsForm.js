import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsForm = () => {
    const [addFriend, setAddFriend] = useState({
        name: '',
        age: '',
        email: ''
    });
    
    const handleChange = e => {
        e.preventDefault();
        setAddFriend({
            ...addFriend,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/friends", addFriend)
            .then(response => {
            console.log(response);
            setAddFriend({name: '', age: undefined, email: ''})
            });
    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
                required
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                onChange={handleChange}
                value={addFriend.name}
            />
            <input 
                required
                type='number'
                name='age'
                id='age'
                placeholder='Age'
                onChange={handleChange}
                value={addFriend.age}
            />
            <input 
                required
                type='email'
                name='email'
                id='email'
                placeholder='email@email.com'
                onChange={handleChange}
                value={addFriend.email}
            />
            <button type='submit'>Add Another Friend</button>
        </form>
    )
};

export default FriendsForm; 