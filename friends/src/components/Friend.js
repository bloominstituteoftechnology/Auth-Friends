import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';
import { Link } from 'react-router-dom';

const Friend = proops => {
  return (
    <li className="Friend">
      <Link to={`/friend/${proops.friend.id}`} key={proops.friend.id}>
        <h3>{proops.friend.name}</h3>
      </Link>
      <p>Age: {proops.friend.age}</p>
      <p>Email: {proops.friend.email}</p>
      <button onClick={() => proops.deleteFriend(proops.friend.id)}>X</button>
    </li>
  );
};

export default connect(
  null,
  { deleteFriend }
)(Friend);
