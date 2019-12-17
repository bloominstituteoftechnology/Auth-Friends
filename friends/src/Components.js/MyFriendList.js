import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../Utils/axiosWithAuth';

import AddFriends from './AddFriends';
import FriendCard from './FriendCard';

const MyFriendsList = () => {
    const [myFriends, setMyFriends] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => setMyFriends(res.data))
        .catch(error => console.log(error))
    })

    return (
        <div>
            <AddFriends />
            <h1>Friends</h1>
            {myFriends.map(friend => (
                <div key={friend.id}>
                    <FriendCard NewFriend={friend} />
                </div>
            ))}
        </div>
    )
}

export default MyFriendsList;