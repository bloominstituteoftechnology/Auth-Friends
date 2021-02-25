import React, { useState, useEffect } from 'react';
import AddFriendForm from './AddFriendForm';
import axios from 'axios';

const FriendList = () => {
    const [friends, setFriends] = useState([]);

    useEffect( () => {
        const token = localStorage.getItem('token');
        axios.get("http://localhost:5000/api/friends", {
            headers: {
                Authorization: token
            }
        }).then(res => {
            console.log('get friends',res);
            setFriends(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <div>
            <h3>FriendList</h3>
            <ul>
                {
                    friends.map(friend => {
                        return <li key={friend.id}> {friend.name}</li>
                    })
                }
            </ul>
            <AddFriendForm setFriends={setFriends}/>
        </div>
    )
}

export default FriendList;