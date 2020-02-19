import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from "../authorization/axiosWithAuth.js";
import Friend from "./Friend.js";

function Friends() {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get("/api/friends")
        .then(res => setFriends(res.data))
        .catch(err => alert("Error getting friends list! \n" + err));
    }, [])

  return (
      <div>
          <h1>These are your friends:</h1>
          <ul>
              {friends.map((friend) => {
                  return (<Friend key={friend.id} friend={friend}></Friend>)
              })}
          </ul>
      </div>
  );
}

export default Friends;