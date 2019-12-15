import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/AxiosWithAuth";
import Friends from "./Friends";
import AddNewFriend from "./AddNewFriend";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFriends } from "../actions";
import { withRouter } from "react-router-dom";

const FriendList = props => {
  console.log("friend-list props:", props);
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriend(res.data);
        props.history.push("/protected");
      })
      .catch(err => console.error("err", err));
  };

  const addFriend = name => {
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", name)
      .then(res => {
        setFriend(res.data);
      })
      .catch(err => console.error(err.response));
  };

  return (
    <div className="friend-list">
      <h1>Friend List</h1>
      <AddNewFriend addFriend={addFriend} />
      <br />

      {friend.map(friend => (
        <Friends key={friend.name} friend={friend} />
      ))}
    </div>
  );
};

export default FriendList;
