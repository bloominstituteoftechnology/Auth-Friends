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

  render() {
    return (
      <div>
        <h2>Create Friends Component</h2>
        <form>
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
