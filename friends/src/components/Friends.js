  
import React, { useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { FriendContext } from "../context/FriendContext";

const Friends = (props) => {
    const {friend, setFriend} = useContext(FriendContext)
    
    const handleDelete = id => {
        axiosWithAuth()
        .delete(`friends/${id}`)
        .then(response => setFriend(friend.filter(friend => friend.id !== id)))
        .catch(err => console.log("Error", err))
    };
  return (
    <div className="card">
      <div className="row">
        <div className="column">
          <p>{props.friend.name}</p>
          <p>{props.friend.age}</p>
          <p>{props.friend.email}</p>
      <button onClick={() => handleDelete(props.friend.id)}>Delete this friend!</button>
        </div>
      </div>
    </div>
  );
};

export default Friends;