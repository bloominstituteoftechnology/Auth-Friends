import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFriendValue =
  // Used to reset and initialize newFriend being typed in
  {
    name: "",
    age: "",
    email: "",
  };

const FriendsList = () => {
  const [friends, setFriends] = useState([]); // State that will hold all the friends that come in from API
  const [newFriend, setNewFriends] = useState(initialFriendValue); // State that holds the new friend being adding

  const getData = () => {
    // We create this function to
    const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .get("./friends/")
      .then((res) => setFriends(res.data));
  };

  useEffect(() => {
    getData();
  }, [friends]);

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("./friends/", newFriend)
      .then((res) => {
        setFriends(res.data);
      });
    setNewFriends(initialFriendValue);
  };

  const onChange = (e) => {
    setNewFriends({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            <h1>Name:{friend.name}</h1>
            <h2>Age:{friend.age}</h2>
            <h2>E:mail{friend.email}</h2>
          </div>
        );
      })}

      <div>New Friend adder</div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          onChange={onChange}
          value={newFriend.name}
          placeholder="name"
        ></input>
        <input
          type="text"
          name="age"
          onChange={onChange}
          value={newFriend.age}
          placeholder="age"
        ></input>
        <input
          type="text"
          name="email"
          onChange={onChange}
          value={newFriend.email}
          placeholder="email"
        ></input>
        <button onClick={onSubmit}>Please god work</button>
      </form>
    </div>
  );
};

export default FriendsList;

// {
//   friends.map((friend) => {
//     return (
//       <div key={friend.id}>
//         <h1>Name:{friend.name}</h1>
//         <h2>Age:{friend.age}</h2>
//         <h2>E:mail{friend.email}</h2>
//       </div>
//     );
//   });
// }
