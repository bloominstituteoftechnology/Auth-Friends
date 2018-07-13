import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFriends, deleteFriend, editFriend } from '../actions'

class FriendDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editing: false,
      name: '',
      age: '',
      email: ''
    }
  }
  componentDidMount () {
    this.props.fetchFriends()
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  filterFriends = () => {
    return this.props.friends.filter((friend) => {
      return friend.id === Number(this.props.match.params.id)
    })
  }
  render () {
    const currentFriend = this.filterFriends()
    const friendName = currentFriend.map((friend) => friend.name)
    const friendEmail = currentFriend.map((friend) => friend.email)
    const friendAge = currentFriend.map((friend) => friend.age)
    const friendId = currentFriend.map((friend) => friend.id)

    return (
      <div>
        {this.state.editing ? (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              this.props.editFriend(this.state, friendId)
              this.setState({ name: '', age: '', email: '' })
            }}
          >
            <input
              name='name'
              type='text'
              value={this.state.name}
              onChange={this.handleChange}
              placeholder='Update name'
            />
            <input
              name='age'
              type='number'
              value={this.state.age}
              onChange={this.handleChange}
              placeholder='Update age'
            />
            <input
              name='email'
              type='text'
              value={this.state.email}
              onChange={this.handleChange}
              placeholder='Update email'
            />
            <button type='submit'>Submit</button>
          </form>
        ) : (
          <div>
            <h1>{friendName}</h1>
            <p>
              <strong>Age</strong>
              {`: ${friendAge}`}
            </p>
            <p>
              {' '}
              <strong>Email</strong>
              {`: ${friendEmail}`}
            </p>
            <button onClick={() => this.props.deleteFriend(friendId)}>
              Delete
            </button>
            <button
              onClick={() => this.setState({ editing: !this.state.editing })}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    api: state.api
  }
}
export default connect(mapStateToProps, {
  fetchFriends,
  deleteFriend,
  editFriend
})(FriendDetails)
