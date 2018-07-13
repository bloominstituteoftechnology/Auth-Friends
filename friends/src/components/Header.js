import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="home-link"><Link to="/">Home</Link></div>
      <div className="header-title"><h2>Check out my cool friends!</h2></div>
      <div className="add-friend-link"><Link to="/api/friends/add">Add friend</Link></div>
    </div>

  )
}

export default Header;
