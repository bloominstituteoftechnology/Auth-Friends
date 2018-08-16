import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFriend, deleteFriend, addFriend, updateFriend, debugging } from "../store/actions";

class FriendsContainer extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      age: ''
    }
  }

  componentDidMount () {
    this.props.fetchFriend();
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClear = () => {
    this.setState({ name: '', email: '', age: '' });
  }

  render () {
    const { addFriend, deleteFriend, updateFriend } = this.props;
    let newFriendObject = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    return (
      <div>
        <input onChange={this.handleOnChange} type="text" name="name" placeholder="name" value={this.state.name} /> 
        <input onChange={this.handleOnChange} type="text" name="age" placeholder="age" value={this.state.age} /> 
        <input onChange={this.handleOnChange} type="text" name="email" placeholder="email" value={this.state.email} />
        <button onClick={() => {
          addFriend();
          this.handleClear();
        }}>Add Friend</button>

        { this.props.friends.lenght === 0
           ? <p>You've got no friends :(</p>
           : this.props.friends.map(friend => {
              <ul>
                <li>${friend.name}</li>
                <li>${friend.age}</li>
                <li>${friend.email}</li>
                <button onClick={() => deleteFriend(friend.id)}>Delete</button>
                <button onClick={() => {
                  updateFriend(friend.id, newFriendObject);
                  this.handleClear();
                }}>Update</button>
              </ul>
             })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { ...state };
}

const mapDispatchToProps = () => ({
  fetchFriend,
  deleteFriend,
  addFriend,
  updateFriend,
  debugging
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsContainer);