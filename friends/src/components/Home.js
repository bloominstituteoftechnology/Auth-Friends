import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <h2>Please sign up</h2>
      <h3>
        or <Link to="/login">log in</Link> if you already have an account
      </h3>
    </div>
  );
};

export default Home;
