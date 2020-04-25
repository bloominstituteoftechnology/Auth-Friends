import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
function Friends(props) {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState({});

  const getData = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        console.log("data on server response ", res);
        setFriends([...friends, ...res.data]);
      })
      .catch((err) => console.error("error when retrieving frendz ", err));
  };

  const postFriend = () => {
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then((res) => {
        console.log("data on server response ", res);
        setFriends([...friends, ...res.data]);
      })
      .catch((err) => console.error("error when retrieving frendz ", err));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
    console.log(newFriend);
  };

  return (
    <>
      <input
        type="text"
        name="name"
        value={newFriend.name}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        type="text"
        name="age"
        value={newFriend.age}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        type="text"
        name="email"
        value={newFriend.email}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          postFriend();
        }}
      >
        ADD FRIEND
      </button>
      {friends.map((friend) => {
        console.log(friend.name);
        return (
          <div>
            <div> name: {friend.name}</div> <div>age: {friend.age}</div>{" "}
            <div>email: {friend.email}</div>
          </div>
        );
      })}
    </>
  );
}
export default Friends;
