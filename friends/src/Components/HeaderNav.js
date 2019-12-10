import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const loggedOutHandle = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <header>
        <h1>Friends APP</h1>
        <nav>
          <NavLink to="/friends" activeClassName="friends">
            Friends
          </NavLink>
          {isLoggedIn ? (
            <NavLink
              exact
              to="/"
              onClick={loggedOutHandle}
              activeClassName="log-out"
            >
              Log Out
            </NavLink>
          ) : (
            <NavLink exact to="/" activeClassName="log-in">
              Log In
            </NavLink>
          )}
        </nav>
      </header>
    </div>
  );
};

export default NavHeader;
