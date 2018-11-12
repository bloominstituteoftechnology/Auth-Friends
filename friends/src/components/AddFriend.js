import React, { Component } from "react";
import { addFriend } from '../actions/friendsActions';
import { connect } from 'react-redux';

class AddFriend extends Component {
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          age: '',
          email: ''
      }
    }
    
    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.addFriend(this.state)
    }

  render() {
      return (

          <form onSubmit={this.submitHandler}>
              <input type="text" name='name' value={this.state.name} onChange={this.inputHandler} placeholder="Name" />
              <br />
              <br />
              <input type="number" name='age' value={this.state.age} onChange={this.inputHandler} placeholder="Age" />
              <br />
              <br />
              <input type="email" name='email' value={this.state.email} onChange={this.inputHandler} placeholder="Email" />
              <button type='submit'>Add Friend</button>
          </form>
      )
  }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {addFriend: addFriend}) (AddFriend);
