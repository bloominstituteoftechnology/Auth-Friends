import React from 'react';
import {Link} from 'react-router-dom';

export const Home = props => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="home">Home</div>
      </Link>
      <Link to="/friends">
        <div className="friends">Friends</div>
      </Link>
      <Link to="/addfriend">
        <div className="addFriend">Add Friend</div>
      </Link>
    </nav>
  );
};
