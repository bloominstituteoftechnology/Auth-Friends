import React from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";

const Friends = (props) => {


  const handleChange = (e) => {
   axiosWithAuth()
   .delete(`/api/friends/${props.friend.id}`)
   .then(response => {
     console.log(response)
   })
   .catch(error => console.log(error))
   window.location.reload();
  };

  return (
    <div className="friends-container">
      <h2>Name:{props.friend.name}</h2>
      <h3>Email:{props.friend.email}</h3>
      <h4>Age:{props.friend.age}</h4>
      <button onClick={handleChange}>Delete your Friend :(</button>
    </div>
  );
};

export default Friends;
