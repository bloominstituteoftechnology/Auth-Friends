import React from "react";
// import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { FriendList } from "../components";
import { getFriends } from "../actions";

class FriendListView extends React.Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    if (this.props.fetching) {
      return <h2>Fetching friends...</h2>;
    }
    return (
      <div className='FriendsList_wrapper'>
        <FriendList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('STATE', state);
  return {
    friends: state.myFriendsReducer.friends,
    error: state.myFriendsReducer.error,
    fetching: state.myFriendsReducer.fetching
  };
};

// export default withRouter(connect(
//   mapStateToProps,
//   { getFriends }
// )(FriendListView));

export default (connect(
  mapStateToProps,
  { getFriends }
)(FriendListView));