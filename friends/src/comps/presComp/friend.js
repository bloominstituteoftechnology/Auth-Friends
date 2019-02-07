import React from 'react';
import {connect} from 'react-redux';
import {deletedFriend} from '../../actions/actions.js';

const Friend = props => {
  const deleteHandler = e => {
    e.preventDefault();
    props.deletedFriend(e.target.id);
  };

  return (
    <div className="friendCont">
      <h1 className="name">{props.name}</h1>
      <div className="age">{props.age}</div>
      <div className="email">{props.email}</div>
      <button id={props.id} onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
};

export default connect(
  null,
  {deletedFriend},
)(Friend);
