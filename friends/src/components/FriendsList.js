import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FriendsList = () => {
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    return (
        <div>Hello!</div>
    );
}