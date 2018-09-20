import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="home-lnk"><Link to="/">Home</Link></div>
      <div className="header-title"><h2>Redux Friends</h2></div>
      <div className="add-friend-lnk"><Link to="/api/friends/add">Add friend</Link></div>
    </header>
  );
}

export default Header;