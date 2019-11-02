import React, { useState, useEffect } from 'react'

function DeleteFriend() {
    const [deleteFriend, setDeleteFriend] = useState({})

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
            {deleteFriend.map(friend => {
                <p>{friend.id}</p>
            })}
        </div>
    )
}

export default DeleteFriend;
