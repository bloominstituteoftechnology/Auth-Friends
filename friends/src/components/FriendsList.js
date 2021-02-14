import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from "react-loader-spinner";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="key spinner">
        <Loader type="Puff" color="#204963" height="60" width="60" />
        <p>Loading Data</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Friends List</h2>
      <h3>
        Want to add a new friend? click <Link to="/newfriend">Here</Link>
      </h3>
      {friends.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <h4>{item.age}</h4>
            <p>{item.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
