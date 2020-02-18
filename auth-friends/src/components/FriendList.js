import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendCard from "./FriendCard";
import FriendForm from "./FriendForm";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Add a Friend</h1>
      <FriendForm />
      {friends.map(friend => (
        <section className="friend-list">
          <FriendCard key={friend.id} friend={friend} />
        </section>
      ))}
    </div>
  );
};
export default FriendsList;