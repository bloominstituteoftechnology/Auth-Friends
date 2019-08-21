import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions";
import { withRouter } from "react-router-dom";
import FriendCard from "./friendCard";
import { Container } from "shards-react";
import axioswithAuth from "../utils/axiosWithAuth";
const FriendsList = props => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axioswithAuth()
      .get("http://localhost:5000/api/friends")
      .then(response => {
        console.log("get response", response);
        setFriends(response.data);
      })
      .catch(error => console.log("get error", error));
  }, []);

  return (
    <Container className="friends-container">
      {friends.map(friend => (
        <FriendCard friend={friend} history={props.history} />
      ))}
    </Container>
  );
};

export default FriendsList;
