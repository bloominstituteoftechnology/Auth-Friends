import React, { useEffect, useState } from "react"
import { axiosWithAuth } from "./axiosWithAuth"
const friends = []
const friendData = {
  name: "",
  age: "",
  email: "",
}

export default () => {
  const [friendsList, setFriendsList] = useState(friends);
  const [loading, setLoading] = useState(true);
  const [addFriend, setAddFriend] = useState(false);
  const [addFriendData, setAddFriendData] = useState(friendData);
  useEffect(() => {
    axiosWithAuth()
      .get("friends")
      .then((res) => {
        console.log("FRIENDS DATA:", res);
        setFriendsList(res.data);
        setLoading(false);
      })
      .catch((err) => console.log("FRIENDS ERROR:", err));
  }, []);
  const toggleAddFriend = () => {
    setAddFriend(!addFriend);
  };
  const handleChanges = (event) => {
    setAddFriendData({
      ...addFriendData,
      [event.target.name]: event.target.value,
    });
  };
  const handleAddFriend = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("friends", addFriendData)
      .then((res) => {
        console.log("ADD FRIEND RESPONSE", res);
        setFriendsList(res.data);
        setAddFriend(!addFriend);
      })
      .catch((err) => console.log("ADD FRIEND ERR:", err));
  };
  if (addFriend) {
    return (
      <div>
        <form onSubmit={handleAddFriend}>
          <input
            type="text"
            placeholder="name"
            onChange={handleChanges}
            name="name"
          ></input>
          <input
            type="text"
            placeholder="age"
            onChange={handleChanges}
            name="age"
          ></input>
          <input
            type="email"
            placeholder="email"
            onChange={handleChanges}
            name="email"
          ></input>
          <button type="submit">Add Friend</button>
          <p onClick={toggleAddFriend}>Back</p>
        </form>
      </div>
    );
  } else if (loading) {
    return (
      <div>
        <h1>Loading Friends...</h1>
      </div>
    );
  } else {
    return (
      <div className="friendsContainer">
        <div>
          <h2>Friends</h2>
          {friendsList.map((friend) => (
            <p key={friend.id}>{friend.name}</p>
          ))}
        </div>
        <div>
          <p onClick={toggleAddFriend}>Add Friend</p>
        </div>
      </div>
    );
  }
};
