import React from 'react';
import {connect} from 'react-redux';

class FriendsListView extends React.Components {

  render() {
    return <div>Character list</div>
  }

}
// const mapStateToProps = state => {
//   return {
//     friends: state.friendsReducer.friends,
//     error: state.friendsReducer.error,
//     fetching: state.friendsReducer.fetching,
//   }
// }
export default FriendsListView;
// export default connect(
//     mapStateToProps,
//     {getFriends}
//     )(FriendsListView);
