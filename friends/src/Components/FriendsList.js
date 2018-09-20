import React, { Component } from 'react';
import { connect } from 'react-redux';
import { friendFetch, friendPost } from '../Store/Actions'

import Friend from '../Presentational/Friend'
import FreindsForm from '../Presentational/FriendsForm';

class FriendsList extends Component {
  state = {
    name: '',
    age: 15,
    email: 'ginger@gmail.com'
  }

  componentDidMount() {
    this.props.friendFetch();
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleClick = event => {
    event.preventDefault();
    this.props.friendPost(this.state);
    this.setState({name: ''})
  }

  render() {
    return (
      <div>
        <div>
          {this.props.friends.map(friend => (
            <Friend key={friend.id} friend={friend}/>
          ))}
        </div>
        <FreindsForm 
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, { friendFetch, friendPost })(FriendsList);