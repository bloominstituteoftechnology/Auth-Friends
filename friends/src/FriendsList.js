import React, { useEffect, useState } from "react";

import axios from "axios";
import { axiosWithAuth } from "./utils/axiosWithAuth";

export const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // const token = JSON.parse(localStorage.getItem("token"));
    // axios
    //   .get("http://localhost:5000/api/friends", {
    //     headers: {
    //       authorization: token,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log({ err }));
  }, []);

  return (
    <div>
      <h1>Protected page</h1>
      {friends &&
        friends.map((friend, i) => {
          return <div key={i}>{friend.name}</div>;
        })}
    </div>
  );
};
