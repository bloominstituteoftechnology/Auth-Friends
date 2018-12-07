import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: null,
      email: "",
      currentFriend: {}
    };
  }

  componentDidMount() {
    let currentFriend = this.props.friends.find(
      currentFriend =>
        currentFriend.id.toString() === this.props.match.params.id
    );

    this.setState({
      name: this.props.update ? currentFriend.name : "",
      age: this.props.update ? currentFriend.age : "",
      email: this.props.update ? currentFriend.email : "",
      currentFriend: currentFriend
    });
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  submitHandler = ev => {
    ev.preventDefault();

    if (this.props.update) {
      this.props.updateFriend(this.state, this.props.match.params.id);
    } else {
      this.props.addFriend(this.state);
    }

    this.setState({
      name: "",
      age: null,
      email: ""
    });

    this.props.history.push("/");
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
        <form onSubmit={this.submitHandler}>
          <div>
            <h3>Name</h3>
            <input
              required
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <h3>Age</h3>
            <input
              required
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <h3>Email</h3>
            <input
              required
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <button>
            {this.props.update ? "Update Friend" : "Add New Friend"}
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
