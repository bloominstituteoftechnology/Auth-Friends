import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions/deleteFriend';


const Friends = (props) => {
  return (
    <ul>
      {props.friends.map((friend, i) => {
        return <li key={i+'a'}> 
          <div className="friendName">{friend.name}</div>
          <div className="friendAge">{friend.age}</div>
          <div className="friendEmail">{friend.email}</div>
          <button onClick={() => props.deleteFriend({index: i})}>Delete Friend</button>
        </li>     
      })}
    </ul>
  );
}

export default connect(null, { deleteFriend })(Friends);
