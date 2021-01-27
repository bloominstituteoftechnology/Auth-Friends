import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

export const FriendsList = () =>{
    const [friends, setFriends] = useState([]);

    const getFriends = () =>{
        axiosWithAuth().get('/friends')
        .then((res) =>{
            console.log(res.data,)
            setFriends(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    
    useEffect(() =>{
        getFriends();
    },[])


    if (friends.length === 0) {
        return <h2>Loading friends...</h2>;
      }


        return(
            <div>
                <h1>Friends List</h1>
                {friends.map((friend) =>{
                    return(
                        <div>
                            <h3>Name: {friend.name}</h3>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>)
                })}
            </div>
        );
};