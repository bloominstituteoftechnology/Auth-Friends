import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";

import FriendForm from './FriendFrom'
const FriendList = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div>
        <FriendForm setFriends={setFriends}/>
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            <h3>{`${friend.name}, ${friend.age}`}</h3>
            <p>{`Email: ${friend.email}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FriendList;
