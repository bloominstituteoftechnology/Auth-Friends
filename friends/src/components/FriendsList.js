import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../util/axiosWithAuth'
import AddFriend from './AddFriend'

function FriendsList() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get("/friends")
        .then(res => {
            console.log(res)
            setFriends(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    return (
        <div>
          
          {friends.map(friend => (
              <div key={friend.id}>
                <p>name: {friend.name}</p>
                <p>age: {friend.age}</p>
                <p>email: {friend.email}</p>
              </div>
            ))}
            <AddFriend />
      </div>
      );
}

export default FriendsList;