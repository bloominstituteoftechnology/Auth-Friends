import React, { Component } from 'react'

class FriendForm extends Component {
  constructor(props) {
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

  submitHandler = e => {
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <h1>Friend Form Here</h1>
        <form>
          <input placeHolder="name"></input>
          <input placeHolder="age"></input>
          <input placeHolder="email"></input>
          <button>Submit</button>


        </form>

      </div>
    )
  }
}

export default FriendForm;
