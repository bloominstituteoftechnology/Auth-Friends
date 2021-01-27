import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Logout from "./Logout";
import Friends from "./Friends";
import AddNewFriends from "./AddNewFriends";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Logout />
      <AddNewFriends />
      <div>
        {friends.map((friend) => (
          <Friends key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}
