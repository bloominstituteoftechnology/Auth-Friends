import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./AxiosAuth";
import Friend from "./Friend";
import { Link } from "react-router-dom";
import {Card, Button} from 'semantic-ui-react';

const FriendsList = props => {
  const [friends, setFriends] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosWithAuth()
      .get("friends")
      .then(res => {
        setFriends(res.data);
        setLoading(false);
      })
      .catch(err => {
        localStorage.setItem("token", null);
        props.history.push("/");
        setLoading(false);
      });
  }, []);

  const handleDelete = (e, id) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`friends/${id}`)
      .then(res => {
        setFriends(res.data);
      });
  };

  return (
    <div>
      {loading && "Finding your friends... Please hold..."}
      {friends && <Button><Link to="/add">Add New Friend</Link></Button>}
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
