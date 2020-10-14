import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import Friend from "./Friend"
import NewFriend from "./NewFriend"

const ProtectedContent = function () {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsLoading(true);
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        // console.log(res.data);
        setIsLoading(false);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteFriend = (id) => {
      axiosWithAuth()
        .delete(`/friends/${id}`)
        .then(res => {
          setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
  }

  const selectFriend = function(currentFriendId) {
    const selectAFriend = friends.filter((friend) => {
        return currentFriendId === friend.id
    })
    console.log(selectAFriend[0])
    deleteFriend(selectAFriend[0].id)
  }

  

  return (
    <div>
      <NewFriend setFriends={setFriends}/>
      {isLoading ? (
        <div>
          <p>Loading Data...</p>
        </div>
      ) : (
        friends.map((friend) => {
          return (
            <Friend key={friend.id} friendData={friend} selectFriend={selectFriend} />
          );
        })
      )}
    </div>
  );
};

export default ProtectedContent;
