import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from "react-loader-spinner";

const Friends = (props) => {
  return (
    <div>
      <h3>Current Friends</h3>

      {props.loading ? (
        <Loader type="ThreeDots" color="#7350E2" height="100" width="100" />
      ) : (
        props.friends.map((friend) => (
          <Link to="/friends" key={friend.id}>
            <p> {friend.name}</p>
          </Link>
        ))
      )}
    </div>
  );
};

export default Friends;
