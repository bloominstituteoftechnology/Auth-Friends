
//-- Dependencies --------------------------------
import React from "react";
import {connect} from "react-redux";
import * as actions from './redux/actions.js';
import FriendForm from './components/friend-form.js';
import {FriendList} from './components/friend-list.js';
import Error from './components/error.js';


//== Friends Component =========================================================

let Friends = class extends React.Component {

  //-- Lifecycle -----------------------------------
  componentDidMount() {
    this.props.getFriends();
  }

  //-- Rendering -----------------------------------
  render() {
    // Show loading if not loaded yet
    return (
      <div className="friends">
        <Error error={this.props.error} />
        <FriendForm onSubmit={this.addFriend} />
        <FriendList
          loading={!this.props.ready}
          friends={this.props.friends}
        />
      </div>
    );
  }

  //-- Interaction ---------------------------------
  addFriend = friendData => {
    if(!this.props.ready){
      this.props.notReady('You cannot add a friend right now');
      return;
    }
    this.props.addFriend(friendData);
  }
}


//== Export, and Redux Preparation =============================================

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
  return {
    friends: state.friends,
    error: state.error,
    ready: !state.fetching,
  };
}
Friends = connect(mapStateToProps, {
  getFriends: actions.getFriends,
  addFriend: actions.addFriend,
  notReady: actions.notReady,
})(Friends);

//-- Exporting -----------------------------------
export default Friends;
