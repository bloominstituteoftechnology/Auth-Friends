import React, { Component } from "react";

class FriendsList extends Component {
  constructor(props) {
    super(props);
  }
  friendLister = () => {
    return this.props.friends.filter((e)=> {if ( this.props.friendID === -1 ){return e} else{  return e.id===this.props.friendID}}).map((e, i) => {
      return (
        <div className="friendListRow" id={e.id} key={i} onClick={ ()=> {this.props.singleUserMode(e.id,"Edit")} }>
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
