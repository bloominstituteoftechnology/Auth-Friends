import React, { useEffect, useState } from "react";

import { axiosWithAuth } from "./utils/axiosWithAuth";

export const Protected = () => {
  const [friends, setFriends] = useState([]);
  console.log(friends);

  useEffect(() => {
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
        friends.map((friend) => {
          return <div>{friend.name}</div>;
        })}
    </div>
  );
};
