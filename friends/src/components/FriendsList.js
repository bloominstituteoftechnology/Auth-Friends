import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AxiosWithAuth from '../AxiosWithAuth';

export default function FriendsList(props) {

let [friends, setFriends] = useState([]);

useEffect(() => {
    AxiosWithAuth().get('/api/friends')
        .then(res => setFriends(res.data))
        .catch(err => console.log(err));
}, [])

    return (
        <div className='friends-container'>
            {friends.map(friend => {
                return (
                <div className='friend-container' key={friend.id}>
                    <div className='name'>{friend.name}</div>
                    <div className='age'>{friend.age}</div>
                    <div className='email'>{friend.email}</div>
                </div>
                )
            })} 
            <Link to='/AddFriend'>Add New Friend</Link>
        </div>
    )
}