import React from 'react';
import Friend from './Friend';

const Friends = props => (
  <React.Fragment>
    {console.log('friends', props.friends)}
    {props.friends.map(f => <Friend friend={f} />)}
  </React.Fragment>
);

export default Friends;
