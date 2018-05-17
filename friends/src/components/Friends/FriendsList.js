import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



import FriendCard from "./FriendCard";
// pull in actions from action/index


class FriendsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("hi friends");

  }


  render() {
  console.log("state " ,this.props.friends);
  return (
      <div>
        {this.props.friends.map(friend => {
          return (
            <Link to={`/friend/${friend.id}`} key={friend.id} >
              <FriendCard friend={friend} />
            </Link>
          );
        })}
      </div>
    );
  }
};


const mapDispatchToProps = state => {
  const { friendsReducer } = state;
  return friendsReducer;
};

export default connect(mapDispatchToProps)(FriendsList);