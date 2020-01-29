import React from "react";
import { axiosWithAuth } from "../Utilities/Utilities";

class AddFriend extends React.Component {
  state = {
    addFriend: {
      id: Date.now,
      name: "",
      age: "",
      email: ""
    }
  };

  handleChange = e => {
    this.setState({
      
       addFriend: {...this.state.addFriend ,
        [e.target.name]: e.target.value}
      }
    );
  };

  addNewFriend = e => {
    e.preventDefault();

    axiosWithAuth()
    .post("/api/friends/", this.state.addFriend)
    .then(res => {

      this.setState({ addFriend: [...res.data]})
         this.props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log();
    return (
      <div>
        <form onSubmit={this.addNewFriend}>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.addFriend.name}
            onChange={this.handleChange}
          />
          Age:
          <input
            type="text"
            name="age"
            value={this.state.addFriend.age}
            onChange={this.handleChange}
          />
          Email:
          <input
            type="text"
            name="email"
            value={this.state.addFriend.email}
            onChange={this.handleChange}
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}
export default AddFriend;
