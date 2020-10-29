  

import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';


const FriendList = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get(`http://localhost:5000/api/friends`)
            .then(res => {
                console.log(res.data);
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    return (
        <>
            <h2>These are my friends!</h2>
            <Link to="/add-friend">ADD FRIEND</Link>
            {friends.map(friend => {
                return (
                    <div key={friend.id} style={{ width: '400px', border: 'solid 1px black', display: 'block', margin: '0 auto' }}>
                        <h3>{friend.name}</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default FriendList;