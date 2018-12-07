import React from "react";
import { connect } from 'react-redux';
import { deleteFriend } from '../store/actions';
import Friend from './Friend';

function List(props) {
  //console.log('rendering')

  return (
    <>
      {props.friends.map(friend => (
       <Friend
       friend={friend}
       key={friend.id}
       deleteFriend={props.deleteFriend.bind(null, friend.id)}
     />
      ))}
    </>
  );
}

export default connect(null, { deleteFriend })(List);
