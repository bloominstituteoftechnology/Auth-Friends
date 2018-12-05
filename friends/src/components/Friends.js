import React from "react";

class Friends extends React.Component {
  render() {
    const { friends } = this.props;
    return (
      <div className="friend-card">
        {friends.map(friend => (
          <div key={friend.id}>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Friends;
