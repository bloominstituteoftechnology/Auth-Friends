import React from "react";
import { withRouter, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Friends from "./components/Friends";
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          width: "50%",
          backgroundColor: "#333",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/friends" component={Friends} />
      </div>
    </div>
  );
}

export default withRouter(App);
// withRouter is re-rendered on props changes
