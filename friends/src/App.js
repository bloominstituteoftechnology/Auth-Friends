import React from "react";
import { withRouter, Route, Link } from "react-router-dom";
import FriendsList from "./components/FriendsList";
function App() {
  return (
    <>
      <FriendsList />
    </>
  );
}

export default withRouter(App);
// withRouter is re-rendered on props changes
