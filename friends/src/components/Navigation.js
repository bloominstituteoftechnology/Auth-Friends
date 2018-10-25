import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="mainNav">
      <nav>
        <NavLink to="/friends-form">Add Friend</NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
