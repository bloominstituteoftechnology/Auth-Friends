import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';
import { Link } from 'react-router-dom';

const Friend = props => {
  return (
    <li className="Friend">
      <Link to={`/friend/${props.friend.id}`} key={props.friend.id}>
        <h3>{props.friend.name}</h3>
      </Link>

      <button onClick={() => props.deleteFriend(props.friend.id)}>X</button>
    </li>
  );
};
export default connect(
  null,
  { deleteFriend }
)(Friend);
