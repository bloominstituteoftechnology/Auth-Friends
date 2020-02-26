import React, { useState, useEffect } from "react";
import WithAuth from "./friendWithAuth";

const Friends = () => {
  const [friendList, setfriendList] = useState([]);
  useEffect(() => {
    WithAuth()
      .get("http://localhost:5000/api/friends")
      .then(rep => {
        setfriendList(rep.data);
      })
      .catch(err => {
        alert(err.response.data.error);
      });
  }, []);
  return <div></div>;
};

export default Friends;
