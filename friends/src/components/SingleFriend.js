import React from "react";

class Friend extends React.Component {
  render() {
    const { friend, erase, toggle, pick } = this.props;
    return (
      <div key={friend.id}>
        <span onClick={() => pick({})}>X</span>
        <h2>{friend.name}</h2>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        <button onClick={() => toggle()}>Update {friend.name}</button>
        <button onClick={() => erase()}>Delete {friend.name}</button>
      </div>
    );
  }
}

export default Friend;
