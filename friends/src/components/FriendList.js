import React, { useState, useEffect } from 'react';
import api from '../utils/api';

function FriendList(props) {
    const [listFriend, setListFriend] = useState([])
    
    useEffect(() => {
        api().get('/api/friends')
        .then(res => {
            console.log(res)
            setListFriend(res.data)
         })
         .catch(err => {
             console.log(err)
         })
    })

    return (
        <div>
           {listFriend.map(friend => (
              <p>{friend.name}</p>
            ))}
        </div>
    )
}

export default FriendList
