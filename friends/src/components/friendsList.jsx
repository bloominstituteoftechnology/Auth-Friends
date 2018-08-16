import React, { Component } from "react";

class FriendsList extends Component {
  constructor(props) {
    super(props);
  }
  friendLister = () => {
    return this.props.friends.map((e, i) => {
      return (
        <div className="friendListRow" id={e.id} key={i}>
          <div className="friendsListItem">{e.name}</div>
          <div className="friendsListItem">{e.age}</div>
          <div className="friendsListItem">{e.email}</div>
        </div>
      );
    });
  };
  componentDidMount = () => {};
  render() {
    return (
      <div className="friendsListContainer">
        <div className="friendsListTitleBar">
          <div className="titleItem">Name</div>
          <div className="titleItem">Age</div>
          <div className="titleItem">Email</div>
        </div>
        {this.friendLister()}
      </div>
    );
  }
}

export default FriendsList;
