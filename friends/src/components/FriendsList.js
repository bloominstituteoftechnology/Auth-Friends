import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';
import Friend from './Friend';

const FriendsList = (props) => {
    const [friends, setFriends] = useState([])
    const [friendsFound, setFriendsFound] = useState(false)

    useEffect(() => {
        // const myToken = localStorage.getItem('token')
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then((res) => {
            setFriends(res.data)
            setFriendsFound(true)
        })
        .catch((err) => {
            setFriendsFound(false)
            console.log(err)
        })
    }, [friends]) //// ?????????

    return (
        <div className='friends-list-wrapper'>
            <AddFriend />
            {friendsFound ? (
            <div className='friends-list'>
                {friends.map((friend) => {
                    return <Friend {...friend} />
                })}
            </div>
            ) : (
                <h2 className='no-friends-banner'>No friends found :(</h2>
            )
        }
        </div>
    )
}

export default FriendsList;