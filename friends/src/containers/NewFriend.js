import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFriend } from '../actions/index'

class NewFriend extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render () {
    return (
      <div>
        <form
          type='submit'
          onSubmit={(e) => {
            console.log(this.state)
            e.preventDefault()
            this.props.addFriend(this.state)
            this.setState({ name: '', age: '', email: '' })
          }}
        >
          <input
            type='text'
            name='name'
            placeholder='Add new Friend'
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <input
            type='number'
            name='age'
            placeholder='Age'
            value={this.state.age}
            onChange={this.handleChange}
            required
          />
          <input
            type='text'
            name='email'
            placeholder='Add email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <button type='submit'>Add Friend</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addFriend })(NewFriend)
