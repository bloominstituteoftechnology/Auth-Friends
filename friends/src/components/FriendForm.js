import React from "react";

class FriendForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  inputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();

    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    this.props.addFriend(friend);
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    return (
      <form className="add-friend-form" onSubmit={this.submitHandler}>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.inputHandler}
          placeholder="Name"
        />
        <input
          name="age"
          type="number"
          value={this.state.age}
          onChange={this.inputHandler}
          placeholder="age"
        />
        <input
          name="email"
          type="text"
          value={this.state.email}
          onChange={this.inputHandler}
          placeholder="email"
        />

        <button className="add-friend-button">Add</button>
        <br />
        <br />
        <br />
      </form>
    );
  }
}
export default FriendForm;
