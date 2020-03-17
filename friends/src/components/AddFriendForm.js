import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({
      name: this.props.name,
      age: this.props.age,
      email: this.props.email
    });

    axiosWithAuth()
      .post("/api/friends", this.state.friends)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Add Friends</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <br />
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.props.name}
            />
          </div>
          <div>
            <label>Age: </label>
            <br />
            <input
              type="text"
              name="age"
              onChange={this.onChange}
              value={this.props.age}
            />
          </div>
          <div>
            <label>Email: </label>
            <br />
            <input
              type="text"
              name="email"
              onChange={this.onChange}
              value={this.props.email}
            />
          </div>
        </form>
        <button type="submit">Add Friend</button>
        <hr />
      </div>
    );
  }
}

export default AddFriendForm;
