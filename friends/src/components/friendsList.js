import axios from 'axios';
import React, { Component } from 'react'

export default class friendsList extends Component {
  state = {
    newFriends: [],
    friend: {
      id: "",
      name: "",
      age: "",
      email: "",
    }
  };
  componentDidMount() {
    this.getData();
  }
  
  getData = () => {
    axios.get("http://localhost:5000/api/friends", {
      headers: {Authorization: localStorage.getItem('token')}
    })
      .then(res => {
        console.log(res.data)
        this.setState({
          newFriends: res.data.data
        })
      })
      .catch(err => {
      console.log(err.response.data.error)
    })
  }

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h2>Friends Info</h2>
        </div>
        <p> {this.state.newFriends}</p>
        <div className="form_box">
          <form >
             <h3>Add Friend:</h3>
            
            <label>Name:<input type="text"
              name="name"
              value={this.state.friend.name}
              onChange={this.handleChange} />
            </label><br/>
            <label>Age:<input type="text"
              name="age"
              value={this.state.friend.age}
              onChange={this.handleChange} />
            </label><br/>
            <label>Email:<input type="text"
              name="email"
              value={this.state.friend.email}
              onChange={this.handleChange} />
            </label><br/><br/>
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
