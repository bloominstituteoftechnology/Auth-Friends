import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
        <input 
          type="text"
          placeholder="add a friend"
        />
        <button>add</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, { addFriend })(FriendForm);