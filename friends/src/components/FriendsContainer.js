import React from 'react';
import { addFriend, fetchDaBois } from '../actions';
import { AddFriendForm } from './AddFriendForm';
import { FriendsList } from './FriendsList';
import { connect } from 'react-redux';



class FriendsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    this.props.fetchDaBois();
  }

  addFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state);
    this.setState({ // reset form
      name: '',
      age: '',
      email: ''
    })
    window.location.reload()
  }

  handleText = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className='friends-container-load'>
        {this.props.fetching ? (
          <h3>Cracking A Cold One With The Bois... One Moment </h3>
        ) : (
          <div className='friends-container-loaded'>
            <FriendsList friends={this.props.friends} />
            <AddFriendForm 
              handleChange={this.handleText} 
              name={this.state.name}
              age={this.state.age}
              email={this.state.email}
              addFriend={this.addFriend}
            />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
 return {
  friends: state.friendsReducer.friends,
  fetchingFriends: state.friendsReducer.fetchingFriends
 }
}

export default connect(
  mapStateToProps,
  { fetchDaBois, addFriend }
)(FriendsContainer);