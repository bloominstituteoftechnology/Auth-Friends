import React, { useEffect, useState} from 'react';
import axiosWithAuth from '../axios/index';
import addFriend from './addFriend';
import Friend from './Friend';
import NavigationCard from './NavigationCard';


function Friends () {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(response=> setFriends(response.data))
        .catch(error=>console.log(error.response))
    },[])

    return (
        <div>
        <addFriend/>
        < NavigationCard logout={true}/>
            {friends.map(friend => (
        <Friend key={friend.id}  name={friend.name} age={friend.age} email={friend.email}
         />
         ))}
       
        </div>
    );
};

export default Friends;