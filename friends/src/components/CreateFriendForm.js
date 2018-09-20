import React, { Component } from 'react'

export default class Friends extends Component {
  state = {
    name: '',
    age: '',
    email: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    }
    
    const emptyFriend = {
      name: '',
      age: '',
      email: '',
    }

    this.props.createFriend(newFriend)
    this.setState(emptyFriend)
  }
  
  render() {
    return (
      <div>
        <h2>Create Friends Component</h2>
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
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
