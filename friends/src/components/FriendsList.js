import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendsCard from './FriendsCard';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                console.log('get success:res', res);
                setFriends([{
                    ...friends,
                    id: res.data.id,
                    name: res.data.name,
                    age: res.data.age,
                    email: res.data.email
                }])
            })
            .catch(err => {
                console.log('get failed: err', err.message)
            })
    }, []);

    return (
        <div>
            <h1 style={{ color: 'white' }}>Our Friends</h1>
            <button className='btn'>Add Friend</button>
            {friends.map(friend => {
                return (
                    <FriendsCard
                        key={friend.id}
                        friends={friend} />
                )
            })}
        </div>
    )
}

export default FriendsList;

