import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.props.add(friend);
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleInput}
        />
        <input
          name="age"
          type="number"
          value={this.state.age}
          onChange={this.handleInput}
        />
        <input
          name="email"
          type="text"
          value={this.state.email}
          onChange={this.handleInput}
        />
        <button className="form button">Submit</button>
      </form>
    );
  }
}
export default Form;
