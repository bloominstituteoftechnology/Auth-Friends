import React from "react";
import { NavLink } from "react-router-dom";

import FriendsList from "../components/FriendsList";

const HomeView = props => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="#">Add Friend</NavLink>
      </nav>
      <FriendsList {...props} />
    </>
  );
};

export default HomeView;
