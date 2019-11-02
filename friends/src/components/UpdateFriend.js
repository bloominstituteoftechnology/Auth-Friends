import React, { useState, useEffect } from 'react'

function UpdateFriend() {
    const [updateFriend, setUpdateFriend] = useState({
        id: [],
    })

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
            {updateFriend.map(friend => {
                <p>{friend.id}</p>
            })}
        </div>
    )
}

export default UpdateFriend;
