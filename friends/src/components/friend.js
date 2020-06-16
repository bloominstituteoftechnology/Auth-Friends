import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Friend = (props) => {
  const removeFriend = (id) => {
    console.log("Remove Function Is Running");
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  console.log(props);
  return (
    <>
      <h5>Friendslist:</h5>
      {props.friends.map((friend) => {
        return (
          <div key={friend.id}>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            <button onClick={() => removeFriend(friend.id)}>
              Remove Friend
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Friend;
