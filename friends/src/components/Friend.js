import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function Friend(props) {
  const [friend, setFriend] = useState({});

  useEffect(() => {
    setFriend(props.friend);
  }, [props.friend]);

  function deleteFriend() {
    axiosWithAuth()
      .delete(`/api/friends/${friend.id}`)
      .then(res => {
        alert("Congrats you lost another friend");
        console.log("deleted", res);
      })
      .catch(err => console.log("error deleting friend", err))
      .finally(() => window.location.reload());
  }

  return (
    <div className="friend">
      <h1>{friend.name}</h1>
      <p>Email: {friend.email}</p>
      <p>Age: {props.friend.age}</p>
      <button className="button" onClick={deleteFriend}>block this friend</button>
    </div>
  );
}

export default Friend;