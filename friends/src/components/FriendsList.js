import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '..//axiosWithAuth';
import FriendsCard from './FriendsCard';
import FriendsForm from './FriendsForm';

const Friends = props => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        axiosWithAuth()
        .get('/api/data')
        .then(res => {
            console.log(res);
            setFriends(res.data)
            })
    }, [])
    return (
        <>

        <FriendsForm />
        <FriendsCard key={friends.id} friends={friends}/>

        </>
    )
}
export default Friends;