import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFriend, deleteFriend, addFriend, updateFriend } from "../store/actions";

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
    console.log(this.props);
    return (
      <div>
        <input type="text" name="name" placeholder="name" /> 
        <input type="text" name="age" placeholder="age" /> 
        <input type="text" name="email" placeholder="email" />
        <button onClick={() => {
          this.props.addFriend();
          this.handleClear();
        }}>Add Friend</button>

        { this.props.friends.lenght === 0
           ? <p>You've got no friends :(</p>
           : this.props.friends.map(friend => {
              <ul>
                <li>${friend.name}</li>
                <li>${friend.age}</li>
                <li>${friend.email}</li>
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
  updateFriend
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsContainer);