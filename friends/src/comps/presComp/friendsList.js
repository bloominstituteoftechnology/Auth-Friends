import React from 'react';
import Friend from './friend.js';
import {connect} from 'react-redux';
import {fetchingFriends} from '../../actions/actions.js';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetFriends();
  }

  render() {
    return this.props.fetching ? (
      <div>Loading...</div>
    ) : (
      <div className="listCont">
        {this.props.friends.map(friend => {
          return (
            <Friend
              key={friend.email}
              name={friend.name}
              age={friend.age}
              email={friend.email}
              id={friend.id}
            />
          );
        })}
      </div>
    );
  }
}

const mstp = state => {
  return {
    friends: state.friends,
    fetching: state.fetchingFriends,
  };
};

export default connect(
  mstp,
  {fetFriends: fetchingFriends},
)(FriendsList);
// const FriendsList = props => {
//   return (
//     <div className="listCont">
//       {props.friends.map(friend => {
//         return <Friend name={props.name} age={props.age} email={props.email} />;
//       })}
//     </div>
//   );
// };
