import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
const Friend = (props) => {
  const [editToggle, setEditToggle] = useState(false);
  const [editFriendInfo, setEditFriendInfo] = useState({
    name: props.friend.name,
    age: props.friend.age,
    email: props.friend.email,
  });

  const deleteFriend = (e) => {
    axiosWithAuth()
      .delete(`api/friends/${props.friend.id}`)
      .then((res) => {
        props.setList(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const editChange = (e) => {
    e.preventDefault();
    setEditFriendInfo({
      ...editFriendInfo,
      [e.target.name]: e.target.value,
    });
  };
  const editFriend = (e) => {
    e.preventDefault();
    setEditToggle(true);
  };
  const submitEdit = (e) => {
    axiosWithAuth()
      .put(`api/friends/${props.friend.id}`, editFriendInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const cancelEdit = (e) => {
    setEditToggle(false);
  };
  return (
    <section>
      {editToggle ? (
        <>
          <form>
            <label> Name:&nbsp;</label>
            <input
              type="text"
              name="name"
              value={editFriendInfo.name}
              onChange={editChange}
            />
            <label> Age:&nbsp;</label>
            <input
              type="text"
              name="age"
              value={editFriendInfo.age}
              onChange={editChange}
            />
            <label>Email:&nbsp;</label>
            <input
              type="text"
              name="email"
              value={editFriendInfo.email}
              onChange={editChange}
            />
            <button onClick={cancelEdit}>Cancel Edit</button>
            <button onClick={submitEdit}>Submit</button>
          </form>
        </>
      ) : (
        <>
          <p> Name:&nbsp;{props.friend.name}</p>
          <p> Age:&nbsp;{props.friend.age}</p>
          <p> Email:&nbsp;{props.friend.email}</p>
          <button onClick={deleteFriend}>Delete</button>
          <button onClick={editFriend}>Edit</button>
        </>
      )}
    </section>
  );
};

export default Friend;