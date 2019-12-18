// a form that collects data for a new friend.
// POST axios request. 
// friend item in friends array has id, email, age, email

import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosAuth';
import { response } from 'express';

const AddFriends = () => {
    const [friendData, setFriendData] = useState({});

    const addFriend = event => {
        event.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', friendData)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            this.props.history.push('/');
        })

    }

    const handleChange = event => {
        setFriendData: {
            ...friendData,
            [event.target.name]: event.target.value,
        }
    }




    return(
        <div>
            <form>
                ID:
                <input 
                type="text"
                name="id"
                value={friendData.id}
                onChange={this.handleChange}
                />

                Email:
                <input 
                type="text"
                name="email"
                value={friendData.email}
                onChange={this.handleChange}
                />

                Age:
                <input 
                type="text"
                name="age"
                value={friendData.age}
                onChange={this.handleChange}
                />

                Email:
                <input 
                type="text"
                name="email"
                value={friendData.email}
                onChange={this.handleChange}
                />

                <button>Add Friend</button>

            </form>
        </div>
    )
}

export default AddFriends;