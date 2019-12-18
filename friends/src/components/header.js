import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="main-nav">
        <h1>
          <i className="fas fa-user-friends">
            {" "}
            Welcome to Friends Managment API
          </i>
        </h1>
        <div className="navi">
          <Link to="/login" className="nav">
            LogIn
          </Link>
          <Link to="/friends" className="nav">
            Friends
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
