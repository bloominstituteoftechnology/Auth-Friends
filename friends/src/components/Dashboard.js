import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>This is the Dashboard component and it has to be PROTECTED</h2>
      <Link to="/add_friend">Add a New Friend</Link>
    </div>
  );
};

export default Dashboard;
