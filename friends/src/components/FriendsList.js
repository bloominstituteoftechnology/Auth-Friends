import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriendForm from "./AddFriendForm";

const FriendsList = props => {
  const [friends, setFriends] = useState([]);

  // componentDidMount() {
  //   this.getFriendsData();
  // }

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        // console.log(res.data);
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <AddFriendForm />

      {friends.map(friend => (
        <div key={friend.id}>
          <h1>{friend.name}</h1>
          <h2>{friend.age}</h2>
          <h3>{friend.email}</h3>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
