import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

// import AddFriend from './AddFriend.js'
import Friend from "./Friend.js";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => setFriends(res.data))
      .catch(err => console.error(err));
  });

  return (
    <>
      {/* <AddFriend /> */}
      <h1>The Peeps</h1>
      {friends.map(friend => (
        <div key={friend.id}>
          <Friend friend={friend} />
        </div>
      ))}
    </>
  );
};

export default Friends;
