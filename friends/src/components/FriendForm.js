import React from 'react';

class FriendForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        age: 0,
        email: '',
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log('button');
    this.props.addFriend(this.state);
  };

  render() {
    return (
      <div>
        <h2>Add New Friend</h2>
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
          />
          <input
            onChange={this.changeHandler}
            type="number"
            name="age"
            value={this.state.age}
            placeholder="Age"
          />
          <input
            onChange={this.changeHandler}
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email"
          />
          <button className="md-button form-button">
            Add Friend
          </button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
