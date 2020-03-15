import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);
  return <div>friends</div>;
}

export default Friends;
