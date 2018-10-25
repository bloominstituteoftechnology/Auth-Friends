import React from 'react';

class CreateFriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: 0,
      email: ''
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.email
    }

    // HOW DO I POST TO REDUX FROM HERE?
    // redux.post(newFriend)

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            type='number'
            placeholder='Age'
            name='age'
            value={this.state.age}
            onChange={this.handleInputChange}
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <input
            type='button'
            value='Submit'
          />
        </form>
      </div>
    )
  }
}

export default CreateFriendForm;