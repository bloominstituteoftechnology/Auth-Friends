import React from 'react';
import { Link } from 'react-router-dom';

const Friend = props => {
  const { id, name, age, email } = props.friend;
  return (
    <div className="friend">
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h3>{email}</h3>
      <Link to={`/update/${id}`}>Update Friend</Link>
    </div>
  );
};

export default Friend;
