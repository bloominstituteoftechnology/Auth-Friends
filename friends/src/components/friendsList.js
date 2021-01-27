import axios from 'axios';
import React, { Component } from 'react'

import { axiosWithAuth } from "./../utils/axiosWithAuth"

import Friend from "./Friend"

export default class friendsList extends Component {
  state = {
    allFriends: [],
    newFriend: {
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
    axiosWithAuth()
    .get("/friends")
      .then(res => {
        console.log(res.data)
        this.setState({
          allFriends: res.data
        })
        // console.log(this.state)
      })
      .catch(err => {
      console.log(err.response.data.error)
    })
  }
  //this is supposed to get data from the server so that WHEN logged in, it will show the friends.

  handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    })
  }

    // postNewFriend = () => {
    //   axiosWithAuth()
    //   .post("/friends")
    //   don't want someone random to add so use axioswithAuth
    //   .then(res => {  
    //     console.log(res.data)
    //     this.setState({
    //       allFriends: res.data, 
    //     })
    //   })
    //   .catch(err => {
    //   console.log(err)
    // })
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h2>Friends Info</h2>
        </div>
        <div className="friends" >
        {
          this.state.allFriends ? this.state.allFriends.map((item, index) => {
            return <Friend friend={item} key={index} />
          })
              : ""
        }
        </div>
        <div className="form_box">
          <form >
             <h3>Add Friend:</h3>
            <p> I'll be there for you....</p>
            <label>Name:<input type="text"
              name="name"
              value={this.state.newFriend.name}
              onChange={this.handleChange} />
            </label><br/>
            <label>Age:<input type="text"
              name="age"
              value={this.state.newFriend.age}
              onChange={this.handleChange} />
            </label><br/>
            <label>Email:<input type="text"
              name="email"
              value={this.state.newFriend.email}
              onChange={this.handleChange} />
            </label><br/><br/>
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
