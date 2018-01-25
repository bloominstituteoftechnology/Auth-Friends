// import addTodo from actions
import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';
// Builds input box + submit button
const AddFriend = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        className="Input-box"
        onSubmit={friend => {
          friend.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addFriend(input.value));
          input.value = '';
        }}
      >
        <input
          className="Input-empty"
          placeholder="Name"
          ref={node => {
            input = node;
          }}
        />
        <button className="Submit-todo" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(AddFriend);
