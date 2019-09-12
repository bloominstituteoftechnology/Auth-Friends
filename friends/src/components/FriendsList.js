import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./AxiosAuth";
import Friend from "./Friend";
import PrivateRoute from './PrivateRoute';
import AddFriend from './AddFriend';
import {Link} from 'react-router-dom';


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

  return (
    <div>
        {loading && "Finding your friends... Please hold..."}
        {friends && <Link to="/add">Add New Friend</Link>}
        
      {friends && friends.map(friend => {
        return <Friend key={friend.id} friend={friend} />;
      })}
      <PrivateRoute path='/add'  component = {AddFriend} />
    </div>
  );
};

export default FriendsList;
