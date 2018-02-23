import React, { Component } from "react";
import { connect } from 'react-redux';
import { getFriends } from '../actions';

const Friends = props => {
  return props.friends.map((friend, i) => {
    return (
      <ul key={i}>
        <li>{friend.name}</li>
        <li>{friend.age}</li>
        <li>{friend.email}</li>
      </ul>
    );
  });
};

// class Friends extends Component {
//   componentDidMount() {
//     this.props.getFriends();
//   }

//   render() {
//     return (
//       {this.props.fetchingFriends ? (<h2>Loading...</h2>) : (
//         {this.props.friends.map((friend, i) => {
//           return (
//             <ul key={i}>
//               <li>{friend.name}</li>
//               <li>{`Age: ${friend.age}`}</li>
//               <li>{`Email: ${friend.email}`}</li>
//             </ul>
//             <button onClick={this.showForm}>Update</button>
//           );
//         })}
//       )}
//     );
//   }

// }



const mapStateToProps = (state) => {
  return {
    friends: state.friendsReducer.friends,
    fetchingFriends: state.friendsReducer.fetchingFriends,
    error: state.friendsReducer.error,
  }
}

// export default Friends;
export default connect(mapStateToProps, { getFriends })(Friends);
