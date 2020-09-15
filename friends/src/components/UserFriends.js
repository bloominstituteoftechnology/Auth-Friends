import React, {useState, useEffect} from 'react';
import {axiosAuth} from '../utils/axiosWithAuth'
import Friend from './Friend'
import FriendForm from './FriendForm'

const UserFriends = () => {
    const [friendsList, setFriendsList] = useState([]);

    // useEffect(() => {
    //     axiosAuth.get('/api/friends')
    //         .then(res=> {
    //             console.log(res);
    //         })
    //         .catch (err => {
    //             console.log(err)
    //         })
    // },[])

    return (
        <div>
            <h2>User Friends</h2>
        </div>
    )
}

export default UserFriends;