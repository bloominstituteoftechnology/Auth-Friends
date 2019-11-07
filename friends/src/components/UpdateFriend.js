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

    const handleDelete = (e) =>{
        e.preventDefault()

        const user = users.filter(user => user.id === id)

        if (window.confirm('Delete Friend?')) {
            setUpdateFriend(updateFriend.filter(friend => friend.id !== id))

            api().delete('/api/friends/123')
                .then(res => {
                    console.log(res)
                    setDeleteFriend(res.data)
                })
                .catch(err => {
                    console.log(err)
                    setUpdateFriend([ ...updateFriend, friend ])
                })
        }
    }

    return (
        <>
            <h1>Friends</h1>
    
            {updateFriend.map((friend) => (
                <div key={friend.id} className="friend">
                    <Link className="friend-update" to={`/friends/${friend.id}`}>
                        Update Friend
                    </Link>
                    <div className="friend-delete" onClick={(e) => handleDelete(e, friend.id)}>
                        Delete Friend
                    </div>
            ))}
        </>
    )
}

export default UpdateFriend;
