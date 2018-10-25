
//-- Dependencies --------------------------------
import React from "react";
import {connect} from "react-redux";
import * as actions from './redux/actions.js';
import Friend from './components/friend.js';


//== Friends Component =========================================================

let Friends = class extends React.Component {

  //-- Lifecycle -----------------------------------
  componentDidMount() {
    this.props.getFriends();
  }

  //-- Rendering -----------------------------------
  render() {
    return (
      <div className="friends">
        {this.props.friends.map(friend => (
          <Friend
            key={friend.id}
            friend={friend}
          />
         ))}
      </div>
    );
  }

  //-- Interaction ---------------------------------
}


//== Export, and Redux Preparation =============================================

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
  return {
    friends: state.friends,
  };
}
Friends = connect(mapStateToProps, {
  getFriends: actions.getFriends,
})(Friends);

//-- Exporting -----------------------------------
export default Friends;
