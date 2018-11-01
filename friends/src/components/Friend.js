import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';

const Friend = props => {
  return (
    <div>
      <li onClick={() => props.deleteFriend(props.friend.id) }>{props.friend.name}</li>
    </div>
  )
}

export default connect(null, {deleteFriend})(Friend)