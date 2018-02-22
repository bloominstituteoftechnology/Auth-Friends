import React, { Component } from 'react';

class Friends extends Component {
  render() {
  return (
    <div>
        <ul>
            {this.props.friends.map(friend => {
                return (

                <li key={friend}>{friend.name}</li>)
            })}
        </ul>
        </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    error: state.friends_reducer.error,
  };
};

export default Friends;
