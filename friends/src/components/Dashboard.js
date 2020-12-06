import React from "react";
import { useHistory } from "react-router-dom";

import Friends from "./Friends";
import AddFriendForm from "./AddFriendForm";

const Dashboard = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <div>
      <h2>This the MyAccount/Dashboard component</h2>
      <button onClick={logout}>Logout</button>
      <br />
      <AddFriendForm />
      <Friends />
    </div>
  );
};

export default Dashboard;
