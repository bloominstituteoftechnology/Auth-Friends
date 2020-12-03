import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from "react-loader-spinner";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("Friends: ", friends);

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = () => {
    setLoading(true);
    const token = localStorage.getItem("token");

    axiosWithAuth()
      .get("/api/friends", {
        headers: {
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        console.log("success response: ", res);
        setFriends(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <h3>Current Friends</h3>

      {loading ? (
        <Loader type="ThreeDots" color="#2C595B" height="100" width="100" />
      ) : (
        friends.map((friend) => <p key={friend.id}> {friend.name}</p>)
      )}
    </div>
  );
};

export default Friends;
