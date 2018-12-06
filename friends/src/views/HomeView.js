import React from "react";

import FriendsList from "../components/FriendsList";

const HomeView = props => {
  return (
    <>
      <h1>Friends List</h1>
      <FriendsList friends={props.friends} />
    </>
  );
};

export default HomeView;
