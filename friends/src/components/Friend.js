import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';

const Friend = proops => {
  return (
    <li className="Friend">
      <h3>{proops.friend.name}</h3>
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
