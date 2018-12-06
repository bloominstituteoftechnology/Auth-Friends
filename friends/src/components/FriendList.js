import React from "react";

class FriendList extends React.Component {

  render() {
    if (this.props.isFetchingFriends) {
      return <div>Loading ...</div>
    }
    return (
      <div className="friend-list">
        {
          this.props.friends.map( friend => (
            <div key={friend.id} onClick={() => this.props.fetchFriend(friend.id)}>
              <span onClick={() => this.props.deleteFriend(friend.id)}>x</span> {friend.name}
            </div>
          ))
        }
      </div>
    );
  }
}

export default FriendList;