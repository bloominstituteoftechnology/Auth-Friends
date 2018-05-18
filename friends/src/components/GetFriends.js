import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { getFriends, getFriend } from '../actions/actions';

class GetFriends extends Component {
  componentDidMount() {
    console.log('cDM')
    this.props.getFriends();
  }
  
  render() {
    console.log(this.props)
    if (this.props.friendsData.fetchingFriends) {
      return <h1>GETTING FRIENDS</h1>;
    }
    else {
      return (
        <ul>
          {
            this.props.friends.map(friend => {
              return (
                <ul key={ friend.id } onClick={ () => this.props.getFriend(friend.id) }>
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

export default connect(mapStateToProps, { getFriends, getFriend })(GetFriends);