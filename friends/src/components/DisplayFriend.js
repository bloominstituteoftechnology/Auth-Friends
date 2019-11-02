import React, { useState, useEffect } from 'react';
import api from '../utils/api';


function DisplayFriend(props) {
    const [newFriend, setNewFriend] = useState({
        id: [],
        name: '',
    })

    useEffect(() => {
        api().get("/api/friends/123")
            .then(res => {
                console.log(res)
                setNewFriend(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        })

    return (
        <div>
            {newFriend.map(friend => {
               <p>{friend.name} {friend.id}</p>
            })}
        </div>
    )
   }


export default DisplayFriend;
