import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriendForm extends React.Component {
  state = {
    newFriend: {
      name: '',
      age: '',
      email: ''
    },

  };
  
  
  handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };
  addFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", this.state.newFriend)
      .then(res => {
        this.setState({ getFriends: res.data });
        this.setState({ newFriend: { name: '', age: '', email: '' } });
        console.log({res})
      })
      .catch(err => console.log({err}))
  }
  render() {
    return (
      <div className='uk-width-medium uk-card uk-card-default uk-card-body'>
        <form onSubmit={this.addFriend}>
          <fieldset className='uk-fieldset'>
            <legend className='uk-legend uk-text-center'>Add Friend</legend>
            <div className='uk-margin'>
              <input
                className='uk-input'
                type='text'
                name='name'
                onChange={this.handleChange}
                value={this.state.newFriend.name}
                placeholder='Name' />
            </div>
            <div className='uk-margin'>
              <input
                className='uk-input'
                type='text'
                name='age'
                onChange={this.handleChange}
                value={this.state.newFriend.age}
                placeholder='Age' />
            </div>
            <div className='uk-margin'>
              <input
                className='uk-input'
                type='email'
                name='email'
                onChange={this.handleChange}
                value={this.state.newFriend.email}
                placeholder='Email' />
            </div>
            <div className='uk-margin'>
              <button className='uk-button uk-button-primary uk-width-1-1'>Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default AddFriendForm;