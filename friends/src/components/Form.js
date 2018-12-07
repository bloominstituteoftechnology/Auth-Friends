import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: null,
      email: "",
      friend: {}
    };
  }

  componentDidMount() {
    if (this.props.friends.length > 0) {
      console.log(this.props.friends);
      let friend = this.props.friends.find(
        friend => friend.id.toString() === this.props.match.params.id
      );
      console.log(friend);
      this.setState({
        name: this.props.update ? friend.name : "",
        age: this.props.update ? friend.age : "",
        email: this.props.update ? friend.email : "",
        friend: friend
      });
    }
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
            ? `Update: ${this.state.friend ? this.state.friend.name : ""}`
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
