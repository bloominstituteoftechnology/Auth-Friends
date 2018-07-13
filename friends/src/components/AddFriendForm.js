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
    console.log("INPUT FORM EVENT: ", event);
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
  };

  render() {
    return this.props.showForm ? (
      <form className="form-group">
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
        <button type="submit">SUBMIT</button>
      </form>
    ) : null;
  }
}

export default AddFriendForm;
