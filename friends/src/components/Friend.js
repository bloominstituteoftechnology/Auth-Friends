import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend, toggleFriend, getFriends } from '../actions';

function handleFriendVisible (friendId) {
  this.props.toggleFriend(friendId)
}

const Friend = props => {
// class Friend extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       friend: ''
//     }
//   }

  // handleFriendVisible = friendId => {
  //   this.props.toggleFriend(friendId)
  // }

  // render() {
    // const { friends } = this.props;
    return (
      <div>
        <li onClick={() => props.deleteFriend(props.friend.id) }>{props.friend.name}</li>
        {/* <li onClick={() => props.toggleFriend(props.friend.id) }>{props.friend.name}</li> */}
      </div>
    )
  // }
}

// const mapStateToProps = state => {
//   return {
//     friends: state.friends
//   }
// }

export default connect(null, {deleteFriend, toggleFriend, getFriends })(Friend)