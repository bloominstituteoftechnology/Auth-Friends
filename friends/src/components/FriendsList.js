import React, { useState } from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

export const FriendsList = () =>{
    const [friends, setFriends] = useState([]);

    const getFriends = () =>{
        axiosWithAuth()
        .get('/friends')
        .then((res) =>{
            console.log(res)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    

        return(
            <div>
                <h1>Friends List</h1>
            </div>
        );
};