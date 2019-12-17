import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../Utils/axiosWithAuth';

import FriendForm from './friendForm';
import FriendCard from './FriendCard';

const FriendsList = () => {
    const [myFriends, setMyFriends] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => setMyFriends(res.data))
        .catch(error => console.log(error))
    })

    return (
        <div>
            <FriendForm />
            <h1>Friends</h1>
            {myFriends.map(friend => (
                <div key={friend.id}>
                    <FriendCard NewFriend={friend} />
                </div>
            ))}
        </div>
    )
}

export default FriendsList;