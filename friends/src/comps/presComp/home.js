import React from 'react';
import {Link} from 'react-router-dom';

export const Home = props => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="home navButton">Home</div>
      </Link>
      <Link to="/friends">
        <div className="friends navButton">Friends</div>
      </Link>
      <Link to="/friends/addfriend">
        <div className="addFriend navButton">Add Friend</div>
      </Link>
    </nav>
  );
};
