import React, { useState, useEffect } from "react";
import AddFriend from "./AddFriend";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendCard from "./FriendCard";

function FriendList() {
  const [friend, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  console.log(friend);
  return (
    <div>
      <h1>Add a new Friend</h1>
      <AddFriend />
      <h1>THESE ARE YOUR FRIENDS</h1>
      <div className="cards">
        {friend.map(items => (
          <FriendCard key={items.id} items={items} />
        ))}
      </div>
    </div>
  );
}

export default FriendList;
