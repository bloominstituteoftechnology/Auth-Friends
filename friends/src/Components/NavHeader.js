import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {Button} from 'semantic-ui-react';

const NavHeader = (props) => {
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
        <NavLink to="/protected" activeClassName="active">
            Friends
          </NavLink><br />
           
            <NavLink exact to="/login" onClick={loggedOutHandle} activeClassName="active">
              LogOut
            </NavLink><br />
          
            <NavLink exact to="/login" activeClassName="active">
              Login
            </NavLink>

          
        </nav>
      </header>
    </div>
  );
};

export default NavHeader;
