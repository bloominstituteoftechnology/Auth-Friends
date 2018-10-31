import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

let nextFriendId = 6;

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  handleFriendInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addFriendHandler = e => {
    const { name } = this.state;
    const addNewFriend = {
      name,
      id: nextFriendId++,
      age: null,
      email: null,
    }
    //console.log(addNewFriend)
    this.props.addFriend(addNewFriend);
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <form className='NewFriendForm'>
        <input
          onChange={this.handleFriendInput}
          type='text'
          name='name'
          placeholder="what's your name again?"
          value={this.state.name}
          />
          <button type='button' onClick={this.addFriendHandler}>
            Friend Me!
          </button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
  }
}

export default connect(mapStateToProps, {
  addFriend
})(FriendForm)