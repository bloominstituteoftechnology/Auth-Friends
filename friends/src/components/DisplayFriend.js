import React, { useState, useEffect } from 'react';
import api from '../utils/api';


function DisplayFriend(props) {
    const [newFriend, setNewFriend] = useState([])

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
            {newFriend.map(friend => (
               <p>My{friend.name}, number{friend.id}</p>
            //    <button onClick={delete.id} />
               ))}
        </div>
    )
   }


export default DisplayFriend;
