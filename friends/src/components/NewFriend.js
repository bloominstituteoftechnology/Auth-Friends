import Header from './Header';
import '../App.css';
import { AxiosWithAuth } from './utils/AxiosWithAuth';

import React, { Component } from 'react';

class NewFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      SuccessMsg: '',
      errorMsg: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandle = e => {
    e.preventDefault();
    // console.log('Entered Values', this.state);

    AxiosWithAuth()
      .post('/api/friends', this.state)
      .then(response => {
        console.log('Responded Values', response.statusText);
        this.setState({ SuccessMsg: response.statusText });
      })
      .catch(error => {
        // console.log(error);
        this.setState({ errorMsg: error });
      });
    this.setState({ name: '', age: '', email: '' });
  };
  render() {
    return (
      <div>
        <Header />
        <div className='formBody'>
          <h1 className='title'>Add New Friend</h1>
          <form onSubmit={this.submitHandle}>
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
              placeholder='Name:'
              required
            />
            <input
              type='number'
              name='age'
              value={this.state.age}
              onChange={this.handleChange}
              placeholder='Age:'
              required
            />
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              placeholder='Email:'
              required
            />
            <button type='submit'>Add New</button>
            <p className='succMsg'>
              {this.state.SuccessMsg ? 'Success!' : null}
            </p>
            <p className='errorMsg'>
              {this.state.errorMsg ? 'Unable to add' : null}
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default NewFriend;
