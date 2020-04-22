import React, { useEffect } from 'react';

import { axiosWithAuth } from '../util/axiosWithAuth'

import AddFriend from './AddFriend'

function FriendsList() {
    const [friends, setFriends ] = useState([]);

    const getFriends = () => {
        axiosWithAuth()
            .get("/friends")
            .then((res) => {
                setFriends(res.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getFriends();
    }, [])

    return (
        <>
        <AddFriend />
        {friends.map((item) => (
            <div key={item.id}>
              <p>name: {item.name}</p>
              <p>age: {item.age}</p>
              <p>email: {friend.email}</p>
            </div>
          ))}
        </>
    )
}

export default FriendsList;