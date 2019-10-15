import React, { useEffect } from "react";
import withAuth from "../axios";

export default function Friends({ setListFriends }) {
  useEffect(() => {
    withAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        debugger;
        setListFriends(res.data);
      })
      .catch(error => {
        debugger;
        alert(error.message);
      });
  }, []);
  return <div>We are in Friends component</div>;
}
