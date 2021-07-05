import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className='header'>
        <h1 className='logo'>
          <Link to='/'>Friends</Link>
        </h1>
        <ul className='main-nav'>
          <li>
            <Link to='/Friends'>Friends List</Link>
          </li>
          <li>
            <Link to='/NewFriend'>Add New Friend</Link>
          </li>

          <li>
            <Link to='/'>Logout</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
