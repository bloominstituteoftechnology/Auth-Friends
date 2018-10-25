
//-- Dependencies --------------------------------
import React from "react";
import {connect} from "react-redux";
import * as actions from './redux/actions.js';
import Friend from './components/friend.js';
import FriendForm from './components/friend-form.js';
import Error from './components/error.js';


//== Friends Component =========================================================

let Friends = class extends React.Component {

  //-- Lifecycle -----------------------------------
  componentDidMount() {
    this.props.getFriends();
  }

  //-- Rendering -----------------------------------
  render() {
    let friendsContent;
    // Show loading if not loaded yet
    if(!this.props.friends.length){
      friendsContent = <span>(Loading)</span>
    // Display Friends List
    } else{
      friendsContent = this.props.friends.map(friend => (
        <Friend
          key={friend.id}
          friend={friend}
        />
      ));
    }
    return (
      <div className="friends">
        <Error error={this.props.error} />
        <FriendForm onSubmit={this.addFriend} />
        <div className="friend-list">
          {friendsContent}
        </div>
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
