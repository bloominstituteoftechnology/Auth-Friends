import React, { useEffect, useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import AddFriend from "./AddFriend";

const GetFriends = () => {
      const [friends, setFriends] = useState([]);
      
      const getData = () => {
        AxiosWithAuth()
        .get("/friends")
        .then((res) => setFriends(res.data ))
        .catch((err) => console.log("getData error:", err));
      };
      
      useEffect(() => {
        getData();
      }, [friends]);
      

    return (
      <div className="friends-cont m-4">
        <div className="add-friends">
          <AddFriend />
        </div>
        <div className="friends-list-cont">
          <h3>Friend List</h3>
          <div className="friends-list m-1">
            {friends.map((friend) => (
              <div key={friend.id} className="friend">
                <p className="friends-name">{friend.name}</p>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default GetFriends;
