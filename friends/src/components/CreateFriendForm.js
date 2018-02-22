import React, { Component } from 'react';

class CreateFriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: '',
  };
  handleInput = () => {};

  submitFriend = () => {
    this.props.createFriend({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  render() {
    <div>
      <form onSubmit="">
        <input onChange={handleInput} type="text" value={this.state.name} />
        <input onChange={handleInput} type="text" value={this.state.age} />
        <input onChange={handleInput} type="text" value={this.state.email} />
        <button />
      </form>
    </div>;
  }
}
export default CreateFriendForm;