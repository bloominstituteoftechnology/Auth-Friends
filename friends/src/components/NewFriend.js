// import React from 'react';
import Header from './Header';
import '../App.css';
import { AxiosWithAuth } from './utils/AxiosWithAuth';

// const NewFriend = () => {
//   return (
//     <div>
//       <Header />
//       New Friend
//     </div>
//   );
// };

// export default NewFriend;

import React, { Component } from 'react';

class NewFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
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
        // console.log('Responded Values', response);
        this.setState({ name: '', age: '', email: '' });
      })
      .catch(error => {
        console.log(error);
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
            />
            <input
              type='number'
              name='age'
              value={this.state.age}
              onChange={this.handleChange}
              placeholder='Age:'
            />
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              placeholder='Email:'
            />
            <button type='submit'>Add New</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewFriend;
