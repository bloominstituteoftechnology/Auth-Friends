import React from "react";
import { connect } from "react-redux";

import { FriendsList } from "./friendslist";
import {frinData} from '../actions/actions'
// import actions

class FriendsListView extends React.Component {
  

  componentDidMount() {
    this.props.dispatch(frinData())
  }

  render() {
    if (this.props.fetching) {
      return <div>Maybe you have no friends?</div>
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    friends: state.frinReducer.friends,
    fetch: state.frinReducer.fetch,
    fail: state.frinReducer.error
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
   mapStateToProps)(FriendsListView);
 
