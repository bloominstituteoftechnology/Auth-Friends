import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavHeader = () => {
  const [isLogged, setisLogged] = useState(true);

  const loggedOutHandle = () => {
    localStorage.removeItem("token");
    setisLogged(false);
  };

  return (
    <div>
      <header>
        <h1>Friends APP</h1>
        <nav>
          <NavLink to="/friends" activeClassName="active">
            Friends
          </NavLink>
          <br />
          {isLogged ? (
            <NavLink
              exact
              to="/"
              onClick={loggedOutHandle}
              activeClassName="active"
            >
              Log Out
            </NavLink>
          ) : (
            <NavLink exact to="/" activeClassName="active">
              Log In
            </NavLink>
          )}
        </nav>
      </header>
    </div>
  );
};

export default NavHeader;
