import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./AxiosAuth";
import Friend from "./Friend";
import { Link } from "react-router-dom";
import {Card} from 'semantic-ui-react';

const FriendsList = props => {
  const [friends, setFriends] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
        setLoading(false);
      })
      .catch(err => {
        localStorage.setItem("token", null);
        props.history.push("/login");
        setLoading(false);
      });
  }, []);

  const handleDelete = (e, id) => {
    console.log("ID ISS....", id);
    e.preventDefault();
    console.log("here");
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        setFriends(res.data);
        console.log("success");
        console.log(res.data);
      });
  };

  return (
    <div>
      {loading && "Finding your friends... Please hold..."}
      {friends && <Link to="/add">Add New Friend</Link>}
    <Card.Group className="card-group">
      {friends &&
        friends.map(friend => {
          return (
            <Friend
              key={friend.id}
              friend={friend}
              history={props.history}
              handleDelete={handleDelete}
            />
          );
        })}
        </Card.Group>
    </div>
  );
};

export default FriendsList;
