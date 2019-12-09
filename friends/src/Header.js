import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isLogged, setIsLogged] = useState(true);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };


  return (
    <div>
      <header>
        <h2>Friends App</h2>
        <nav>
          <NavLink to="/friends" activeClassName="active">
            Friends
          </NavLink>
          {isLogged ? (
            <NavLink exact to="/" onClick={handleLogOut} activeClassName="active">
              Log&nbsp;Out
            </NavLink>
          ) : (
            <NavLink exact to="/" activeClassName="active">
              Log&nbsp;In
            </NavLink>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;