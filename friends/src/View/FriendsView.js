import React from "react";

import FriendsList from "../Components/FriendsList";
import CreateFriendForm from "../Components/CreateFriendForm";
function FriendsView() {
  return (
    <div>
      <CreateFriendForm />
      <FriendsList />
    </div>
  );
}

export default FriendsView;
