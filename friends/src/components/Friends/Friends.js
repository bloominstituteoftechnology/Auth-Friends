import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../util/axiosWithAuth";

import "./Friend.css";

function Friends() {
  const [friends, setFriends] = useState([]);
  const [friendsFormState, setFriendsFormState] = useState({
    name: "",
    age: 0,
    email: "",
  });

  useEffect(() => {
    axiosWithAuth()
      .get("api/friends")
      .then((res) => setFriends(res.data));
  }, []);

  //Event Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/friends", friendsFormState)
      .then((res) => setFriends(res.data))
      .catch((err) => console.error(err));

    setFriendsFormState({
      ...friendsFormState,
      name: "",
      age: 0,
      email: "",
    });
  };

  const handleChange = (e) => {
    setFriendsFormState({
      ...friendsFormState,
      [e.target.name]:
        e.target.name === "age" ? parseInt(e.target.value) : e.target.value,
    });
  };

  return (
    <>
      <div>
        {friends.map((friend) => (
          <div key={friend.id} className="friend">
            {JSON.stringify(friend)}
          </div>
        ))}
      </div>

      <form>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={friendsFormState.name}
          />
        </label>

        <label htmlFor="age">
          <input
            type="number"
            name="age"
            onChange={handleChange}
            min="0"
            max="130"
            value={friendsFormState.age}
          />
        </label>

        <label htmlFor="email">
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={friendsFormState.email}
          />
        </label>

        <button onClick={handleSubmit}> Submit </button>
      </form>
    </>
  );
}

export default Friends;
