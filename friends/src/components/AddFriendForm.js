import React from "react";

class AddFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  handleChange = event => {
    console.log(event);
  };

  render() {
    return this.props.showForm ? (
      <form>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
      </form>
    ) : null;
  }
}

export default AddFriendForm;
