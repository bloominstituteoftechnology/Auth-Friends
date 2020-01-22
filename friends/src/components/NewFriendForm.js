import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const NewFriendForm = props => {
    const [friendData, setFriendData] = useState({
        name: '',
        age: '',
        email: ''
    });

    const dispatch = useDispatch();
    const friends = useSelector(state => state.friendsReducer.friends);

    const handleChanges = e => {
        setFriendData({ ...friendData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        dispatch({ type: 'SUBMIT_IS_LOADING', payload: true });
        axios 
            .post('http://localhost:5000/api/friends', friendData, {
                headers: { Authorization: localStorage.getItem('token') }
            })
            .then(res => {
                dispatch({ type: 'SUBMIT_IS_LOADING', payload: false });
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: 'SUBMIT_IS_LOADING', payload: false });
            });
    };

    return(
        <div>
            <h3>Add a New Friend</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    onChange={handleChanges}
                    value={friendData.name}
                />
                <input
                    type='text'
                    name='age'
                    placeholder='age'
                    onChange={handleChanges}
                    value={friendData.age}
                />
                <input
                    type='text'
                    name='email'
                    placeholder='Email'
                    onChange={handleChanges}
                    value={friendData.email}
                />
                <button type='submit'>Add Friend!</button>
            </form>
        </div>
    );
};

export default NewFriendForm;