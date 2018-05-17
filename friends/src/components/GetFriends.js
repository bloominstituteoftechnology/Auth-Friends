import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { getFriends } from '../actions/actions';

class GetFriends extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  
  render() {
    console.log(this.props.friends)
    // return <h1>HELLO</h1>

    if (this.props.friends.length > 0) {
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
    else {
      return <h1>GETTING FRIENDS</h1>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.getFriendsReducer.friends
  }
};

export default connect(mapStateToProps, { getFriends })(GetFriends);