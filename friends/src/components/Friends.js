import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions/actions';
class Friends extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.friends.map((friend, i) => {
            return (
              <li key={friend.i}>
                <p>{friend.name}</p>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getFriends })(Friends);