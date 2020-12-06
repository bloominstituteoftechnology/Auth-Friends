import React from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = (props) => {
  axiosWithAuth()
    .get("/api/friends")
    .then((res) => console.log("success response: ", res.data))
    .catch((err) => console.log(err));

  return (
    <div>
      <h3>Current Friends</h3>

      {props.loading ? (
        <Loader type="ThreeDots" color="#7350E2" height="100" width="100" />
      ) : (
        props.friends.map((friend) => (
          <Link to={`/friends/${friend.id}`} key={friend.id}>
            <p> {friend.name}</p>
          </Link>
        ))
      )}
    </div>
  );
};

export default Friends;
