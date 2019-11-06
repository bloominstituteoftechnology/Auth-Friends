import React, { useState, useEffect } from 'react';
import api from '../utils/api';


function DisplayFriend(props) {
    const [newFriend, setNewFriend] = useState([])

    // handleDelete = (event) => {
    //     event.preventDefault()
    // }    

    useEffect((id) => {
        api().get(`/api/friends/${id}`)
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
            {newFriend.map((friend, item) => (
               <p>My key={item} {friend.name}, number{friend.id}</p>
            //    <button onClick={id.delete}>Delete Friend</button>
               ))}
        </div>
    )
   }



export default DisplayFriend;
