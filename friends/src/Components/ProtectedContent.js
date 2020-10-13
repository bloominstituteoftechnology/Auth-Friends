import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const ProtectedContent = function () {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsLoading(true);
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log("THIS", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p>This content is inaccessable unless you have a token</p>
      {isLoading ? (
        <div>
          <p>Loading Data...</p>
        </div>
      ) : (
        friends.map((friend) => {
          return (
            <div key={friend.id}>
              <p>Name: {friend.name} </p>
              <p>Age: {friend.age} </p>
              <p>Email: {friend.email} </p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ProtectedContent;
