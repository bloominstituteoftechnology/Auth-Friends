import React from 'react';
import { connect } from 'react-redux';

import { deleteFriend } from '../actions';

function Friend({friend, deleteFriend}) {

  return (

    <div className='friend'>

      <h2>{friend.name}</h2>
      <p>Age: {friend.age}</p>
      <a href={`mailto:${friend.email}`}>{friend.email}</a>
      <span
        className='delete-btn'
        onClick={() => deleteFriend(friend)}>X</span>

    </div>

  );

}

export default connect(null, { deleteFriend })(Friend);
