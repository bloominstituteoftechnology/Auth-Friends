import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Friend from "../Components/Friend";
import AddFriend from "./AddFriend";

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
      <AddFriend setFriends={setFriends} />
      {!friends
        ? null
        : friends.map((friend, index) => (
            <Friend key={index} friend={friend} />
          ))}
    </div>
  );
};

export default FriendsList;
