import React, { Component } from 'react'

class UpdateFriendForm extends Component {
  state = {
    id: '',
    name: '',
    age: '',
    email: '',
  }

  componentDidMount() {
    this.setState({
      id: this.props.friend.id,
      name: this.props.friend.name,
      age: this.props.friend.age,
      email: this.props.friend.email,
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const updatedFriend = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    this.props.updateFriend(updatedFriend)
    this.props.isUpdating()
    this.setState({
      id: '',
      name: '',
      age: '',
      email: '',
    })
  }

  render() {
    return (
      <div>
        <h2>Update Friends Component</h2>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <input
              name="age"
              type="number"
              placeholder="Age"
              value={this.state.age}
              onChange={this.handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
      </div>
    )
  }
}


export default UpdateFriendForm