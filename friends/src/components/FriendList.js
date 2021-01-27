import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './../uliti/axiosWithAuth'
import Friend from './Friends';
import Form from './Form';


const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    const getFriends = () => {
      axiosWithAuth()
        .get("/api/friends")
        .then((res) => {
          console.log(res);
          setFriends(res.data);
        })
        .catch((err) => console.log(err));
    };

    useEffect(() => {
      getFriends();
    }, []);

    return (
      <div>
        <Form setFriends={setFriends} />
        {!friends
          ? null
          : friends.map((friend, index) => (
              <Friend key={index} friend={friend} />
            ))}
      </div>
    );
  };

  export default FriendsList