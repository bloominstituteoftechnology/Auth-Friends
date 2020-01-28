import React from 'react';
import { Card } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friends extends React.Component{
  state = {
    friends: [],
    newFriend: {
      name: '',
      age: '',
      email: ''
    }
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  addFriend = (e) => {
    e.preventDefault();
    console.log(this.state)
    axiosWithAuth()
      .post('/api/friends', this.state.newFriend)
      .then(res => {
        console.log(res)
        this.setState({
          ...this.state,
          friends: res.data,
          newFriend: {
            name: '',
            age: '',
            email: ''
          }
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <div 
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-evenly',
            apgnItems: 'center'
          }}
        >
          <Card>
            <form onSubmit={this.addFriend}
              style={{
                margin: '20px', 
                width: '400px',
                color: 'white',
                borderRadius: '5px',
                display: 'flex',
                flexFlow: 'column',
              }}
            >
              <TextField
                id="name-input"
                label="Name"
                type="name"
                name="name"
                value={this.state.newFriend.name}
                onChange={this.handleChange}
              />
              <TextField
                id="email-input"
                label="Email"
                type="email"
                name="email"
                value={this.state.newFriend.email}
                onChange={this.handleChange}
              />
              <TextField
                id="age-input"
                label="Age"
                type="age"
                name="age"
                value={this.state.newFriend.age}
                onChange={this.handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{marginTop: '30px'}}
                >
                Add Friend!
              </Button>
            </form>
          </Card>
          {this.state.friends.map(friend => (
            <Card 
              key={friend.id}
              style={{
                margin: '20px', 
                width: '400px',
                color: 'white',
                background: 'black',
                borderRadius: '5px'
              }}
            >
              <h1>{friend.name}</h1>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
                <p>{friend.id}</p>
            </Card>
          ))}
        </div>
      </>
    )
  }
}

export default Friends;