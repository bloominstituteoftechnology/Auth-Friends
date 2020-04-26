import React from 'react';
import { Link } from 'react-router-dom';

export const LogIn = () => {
  return (
    <div>
      <Link to='/Login'>Log In</Link>
    </div>
  );
};

export const LogOut = () => {
  return (
    <div>
      <Link onClick={localStorage.clear()} to='/Login'>
        Log Out{' '}
      </Link>
    </div>
  );
};
