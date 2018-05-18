import React from 'react';
import AddFriend from '../AddFriend/AddFriend';
import './Header.css';

const Header = props => {
  return (
    <header className="Header">
      <h1>
        {props.iconLogo ? <i className={`logo ${props.iconLogo}`}></i> : null}
        <span className="title d-none d-sm-inline">{props.title}</span>
      </h1>
      <AddFriend />
    </header>
  );
}
 
export default Header;