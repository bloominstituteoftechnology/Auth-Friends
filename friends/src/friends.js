
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
  constructor() {
    super(...arguments);
    this.state = {
      focus: null
    }
  }
  componentDidMount() {
    this.props.getFriends();
  }

  //-- Rendering -----------------------------------
  render() {
    // Show loading if not loaded yet
    return (
      <div className="friends">
        <h1>Totally Normal Friends List</h1>
        <FriendForm
          onSubmit={this.addFriend}
          update={this.state.focus? true : false}
        />
        <Error error={this.props.error} />
        <FriendList
          loading={!this.props.ready}
          friends={this.props.friends}
          focus={this.state.focus}
          onFocus={this.focusFriend}
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
  focusFriend = eventClick => {
    let friendId = Number(eventClick.currentTarget.dataset.id);
    console.log(friendId)
    this.setState({
      focus: friendId
    });
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
