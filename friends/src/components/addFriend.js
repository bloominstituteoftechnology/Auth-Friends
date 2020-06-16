import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
  constructor() {
    super();
    this.state = { friend: { name: "", age: "", email: "" } };
  }

  submitHandler = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", this.state.friend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  changeHandler = (event) => {
    this.setState({
      friend: { ...this.state.friend, [event.target.name]: event.target.value },
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="AddFriend">
        <h2>Add Friend</h2>
        <form onSubmit={this.submitHandler}>
          <input onChange={this.changeHandler} placeholder="Name" name="name" />
          <input onChange={this.changeHandler} placeholder="Age" name="age" />
          <input
            onChange={this.changeHandler}
            placeholder="Email"
            name="email"
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default AddFriend;
