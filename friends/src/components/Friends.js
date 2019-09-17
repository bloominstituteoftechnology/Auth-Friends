import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../helpers/axiosWithAuth";

import { Link } from "react-router-dom";

const Friends = props => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")

      .then(res => {
        console.log(res);
        setFriendsList(res.data);
      })
      .catch(err => console.log(err.response));
  }, []);

  return (
    <div>
      {friendsList.map(friend => {
        return (
          <div key={friend.id}>
            {" "}
            Name: {friend.name} Email: {friend.email} Age: {friend.age}{" "}
          </div>
        );
      })}

      <Link to="/friendForm/">Add a friend</Link>
    </div>
  );
};

export default Friends;
