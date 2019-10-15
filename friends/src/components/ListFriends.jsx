import React, { useState, useEffect } from "react";
import withAuth from "../axios";
import FriendCard from "./FriendCard";
import NewFriendForm from "./NewFriendForm";

export default function ListFriends({
  listFriends,
  setListFriends,
  onTypeNewFriendForm,
  newFriend,
  onSubmitNewFriend
}) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    withAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setIsLoading(true);
        setListFriends(res.data);
      })
      .catch(error => {
        alert(error.message);
      });
  }, []);
  return (
    <div>
      <NewFriendForm
        onTypeNewFriendForm={onTypeNewFriendForm}
        newFriend={newFriend}
        onSubmitNewFriend={onSubmitNewFriend}
      />
      {!isLoading ? (
        <div>Loading data...</div>
      ) : (
        listFriends.map(friend => {
          return <FriendCard key={friend.id} friend={friend} />;
        })
      )}
    </div>
  );
}
