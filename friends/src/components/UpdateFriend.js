import React, { useState, useEffect } from 'react';
import api from '../utils/api';

function UpdateFriend() {
    const [updateFriend, setUpdateFriend] = useState([])

    useEffect(() => {
        api().put('/api/friends/:id')
        .then(res => {
            console.log(res)
            setUpdateFriend(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    return (
        <div>
            {updateFriend.map(friend => (
                <p>{friend.name}, {friend.id}</p>
            ))}
        </div>
    )
}

export default UpdateFriend;
