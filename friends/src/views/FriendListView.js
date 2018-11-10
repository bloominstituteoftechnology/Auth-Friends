import React from "react";
import {connect} from "react-redux";
import {fetchFriends} from "../actions";

import {FriendList} from "../components";
// import actions

class FriendListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchFriends()
  }

  render() {
    // if (this.props.loading) {
    //   <h1>LOADING</h1>
    //   // return something here to indicate that you are fetching data
    // }
    return (<div>

      {/* {
        this.props.error !== ''
          ? <h1>{this.props.error}</h1>
          : null
      } */}

       <FriendList friends={this.props.friends} />
    </div>);
  }
}
const mapStateToProps = (state) => {
  return {friends: state.friendsReducer.characters, loading: state.friendsReducer.loading, error: state.friendsReducer.error}
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, {
  fetchFriends
  /* action creators go here */
})(FriendListView);
