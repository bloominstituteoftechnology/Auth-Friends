import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



import FriendCard from "./FriendCard";
// pull in actions from action/index
import { fetchFriends } from '../../actions';



class FriendsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriends();
  }


  render() {
  console.log("state " ,this.props);
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
  console.log(state.friendsReducer);
  const  friendsReducer  = state.friendsReducer;
  return friendsReducer;
};

export default connect(mapDispatchToProps, { fetchFriends })(FriendsList);

