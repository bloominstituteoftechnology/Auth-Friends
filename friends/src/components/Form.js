import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      ageInput: 0,
      emailInput: "",
      currentFriend: {}
    };
  }

  componentDidMount() {
    let friend = this.props.friends.find(
      friend => friend.id.toString() === this.props.match.params.id
    );

    this.setState({
      currentFriend: friend,
      nameInput: this.props.update ? friend.name : "",
      ageInput: this.props.update ? friend.age : "",
      emailInput: this.props.update ? friend.height : ""
    });
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  render() {
    if (!this.props.friends.length) return <h2>Loading...</h2>;
    return (
      <React.Fragment>
        <h2>
          {this.props.update
            ? `Update: ${
                this.state.currentFriend ? this.state.currentFriend.name : ""
              }`
            : "Add New Smurf"}
        </h2>
        <form>
          <div>
            <h3>Name</h3>
            <input
              required
              type="text"
              name="name"
              value={this.state.nameInput}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <h3>Age</h3>
            <input
              required
              type="number"
              name="age"
              value={this.state.ageInput}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <h3>Email</h3>
            <input
              required
              type="email"
              name="email"
              value={this.state.emailInput}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">
            {this.props.update ? "Update Friend" : "Add New Friend"}
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
