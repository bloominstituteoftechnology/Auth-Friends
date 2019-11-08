import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import { Link } from 'react-router-dom';

function UpdateFriend(props) {
    const [updateFriend, setUpdateFriend] = useState([])

    useEffect(() => {
        api().put(`/api/friends/${props.match.params.id}`)
        .then(res => {
            console.log(res)
            setUpdateFriend(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    
    return (
        <>
            <h1>Friends</h1>
    
            {updateFriend.map((friend) => (
                <div key={friend.id} className="friend">
                    <Link className="friend-update" to={`/friends/${friend.id}`}>
                        Update Friend
                    </Link>
                    
                 </div>
            ))}
        </>
    )
}

export default UpdateFriend;
