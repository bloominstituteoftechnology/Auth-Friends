import React, {useState, useEffect} from 'react';
import {axiosAuthWithToken} from '../utils/axiosWithAuth'
import Friend from './Friend'
import FriendForm from './FriendForm'

const UserFriends = () => {
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        axiosAuthWithToken().get('/api/friends')
            .then(res=> {
                console.log(res.data);
                setFriendsList(res.data)
            })
            .catch (err => {
                console.log(err)
            })
    },[])

    return (
        <div>
            <h2>User Friends</h2>
            <h3>Add Friend Form</h3>
            <div>
                <h3>Friend List</h3>
                {friendsList.map(f => {
                    return <Friend friend = {f} key = {f.id}/>
                })}
            </div>
            
        </div>
    )
}

export default UserFriends;