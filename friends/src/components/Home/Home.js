import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <h1>My Extra Special Friends</h1>
        <h4>Enter Here to Meet Them!:</h4>
        
        <Link to="/friends">Enter</Link>
  </div>
  );
}

export default Home;
