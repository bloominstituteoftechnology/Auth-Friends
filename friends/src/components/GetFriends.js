import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { getFriends } from '../actions/actions';

class GetFriends extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  
  render() {
    if (this.props.friendsData.fetchingFriends) {
      return <h1>GETTING FRIENDS</h1>;
    }
    else {
      return (
        <ul>
          {
            this.props.friends.map(friend => {
              return (
                <ul key={ friend.id }>
                  <li>{ friend.name }</li>
                  <li>{ friend.email }</li>
                  <li>{ friend.age }</li>
                </ul>
              );
            })
          }
        </ul>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    friendsData: state.getFriendsReducer,
    friends: state.getFriendsReducer.friends
  }
};

export default connect(mapStateToProps, { getFriends })(GetFriends);