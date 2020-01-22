import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Card from './Card';
import NewFriendForm from './NewFriendForm';
import { response } from 'express';

const Friend = () => {
    const dispatch = useDispatch();
    const friends = useSelector(state => state.friendsReducer.friends);
    
    useEffect(() => {
        const gettingFriends = () => {
            axios
                .get('http://localhost:5000/api/friends', {
                    headers: { Authorization: localStorage.getItem('token') }
                })
                .then(res => {
                    console.log('response', res);
                    dispatch({ type: 'Set_FRIENDS', payload: response.data });
                })
                .catch(err => {
                    console.log('Error', err);
                });
        };
        gettingFriends();
    }, []);

    return (
        <div>
            <NewFriendForm />
            <h1>Hi Friends</h1>
            {friends.length > 0 ? friends[0].map(friend => {
                console.log('Friends', friend);
                return (
                    <div>
                        <h2>Name: {friend.name}</h2>
                        <h2>Age: {friend.age}</h2>
                        <h2>Email: {friend.email}</h2>
                    </div>
                );
            })
        : null}
        </div>
    );
};

export default Friend;