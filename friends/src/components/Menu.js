import React from 'react';

const Menu = props => {
  const logout = () => {
    window.localStorage.removeItem('token');
    props.history.push('/login');
  };

  return (
    <div>
      <a href="/friends/add">Add Friend</a>
      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
};

export default Menu;
