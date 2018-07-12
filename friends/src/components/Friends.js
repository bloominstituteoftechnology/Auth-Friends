import React from 'react';
import Friend from './Friend';

const Friends = props => (
  <React.Fragment>
    {props.friends.map(f => <Friend friend={f} key={f.id} />)}
  </React.Fragment>
);

export default Friends;
