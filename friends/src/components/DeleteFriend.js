import React, { useState, useEffect } from 'react';
import api from '../utils/api';

function DeleteFriend() {
    const [deleteFriend, setDeleteFriend] = useState([])

    useEffect(() => {
        api().delete('/api/friends/123')
            .then(res => {
                console.log(res)
                setDeleteFriend(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div>
            {deleteFriend().map(friend => (
                <p key={friend.id}> Number{friend.id}</p>
            ))}
        </div>
    )
}

export default DeleteFriend;
