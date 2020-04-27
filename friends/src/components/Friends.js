import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
function Friends(props) {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState({});
  const [loadingText, setLoadingText] = useState("Loading...");
  const logOut = () => {
    localStorage.removeItem("token");
    props.setIsLoggedIn(!props.isLoggedIn);
  };

  const loadingToggler = (res) => {
    res.data.length === 0
      ? setLoadingText(
          "You don't have any friends yet, you can add friends using the form above"
        )
      : console.log("Alright, you have friends, so you got lucky.");
  };

  const getData = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        console.log("data on server response ", res);
        setFriends([...friends, ...res.data]);
        loadingToggler(res);
      })
      .catch((err) => console.error("error when retrieving frendz ", err));
  };

  const postFriend = () => {
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then((res) => {
        setFriends([...friends, ...res.data]);
        loadingToggler(res);
        console.log(res);
        setNewFriend({
          name: "",
          age: "",
          email: "",
          id: "",
        });
      })
      .catch((err) => console.error("error when posting new frendz ", err));
  };

  const deleteFriend = (delFriend) => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${delFriend.id}`)
      .then((res) => {
        setFriends([...res.data]);
        loadingToggler(res);
      })
      .catch((err) => console.error("error when posting new frendz ", err));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
    console.log(newFriend);
  };
  let loadingString = "Loading...";
  return (
    <>
      Add New Friend <br />
      <br /> Name:{" "}
      <input
        type="text"
        name="name"
        value={newFriend.name}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      Age:{" "}
      <input
        type="text"
        name="age"
        value={newFriend.age}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      Email:{" "}
      <input
        type="text"
        name="email"
        value={newFriend.email}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          postFriend();
        }}
      >
        ADD FRIEND
      </button>
      <br />
      <button
        onClick={(e) => {
          logOut();
        }}
      >
        SIGN OUT
      </button>
      <br />
      Your Friends:
      <br />
      <br />
      {friends.length != 0 ? (
        friends.map((friend) => {
          return (
            <div>
              <div> name: {friend.name}</div> <div>age: {friend.age}</div>{" "}
              <div>email: {friend.email}</div>
              <br />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  deleteFriend(friend);
                }}
              >
                Remove Friend
              </button>
            </div>
          );
        })
      ) : (
        <div>{loadingText}</div>
      )}
    </>
  );
}
export default Friends;
