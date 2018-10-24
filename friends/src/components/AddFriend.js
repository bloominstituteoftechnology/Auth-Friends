import React from 'react';

export default props => {
  return (
    <div>
      <form onSubmit={props.updateDatabase}>
        <input onChange={props.handleNewFriend} name="friend" />
        <input onChange={props.handleNewFriend} name="age" />
        <button type="submit" onSubmit={props.updateDatabase}>
          Add Friend
        </button>
      </form>
    </div>
  );
};
