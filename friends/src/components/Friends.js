import React, { Component } from 'react';
import { connect } from 'react-redux';

class Friends extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.friends.map(friend => {
            return (
              <li key={friend.id}>
                {friend.name}
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
    error: state.friendsReducer.error,
  };
};

export default connect(mapStateToProps)(Friends);
