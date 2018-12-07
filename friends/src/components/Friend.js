import React from 'react';
import { connect } from 'react-redux';

import './Friend.scss';

import { deleteFriend, setFormToUpdate } from '../actions';

function Friend({friend, deleteFriend, setFormToUpdate}) {

  return (

    <div className='friend'>

      <h2>{friend.name}</h2>
      <p>Age: {friend.age}</p>
      <a href={`mailto:${friend.email}`}>{friend.email}</a>
      <span
        className='delete-btn'
        onClick={() => deleteFriend(friend)}
      >
      X
      </span>
      <button onClick={() => setFormToUpdate(friend)}>Update</button>

    </div>

  );

}

export default connect(null, { deleteFriend, setFormToUpdate })(Friend);
