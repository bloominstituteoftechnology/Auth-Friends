import React from "react";
import axios from "axios";

class CreateForm extends React.Component {
  state = {
    newFriend: {
      name: "",
      age: "",
      email: ""
    }
  };

  handleChange = event => {
      this.setState({
          newFriend: {
          ...this.state.newFriend,
          [event.target.name]: event.target.value
        }
      });
  };

  addFriendToList = () => {
      axios.post("http://localhost:5000/api/friends", this.state.newFriend, {
          headers: {Authorization: localStorage.getItem("token")}
      })
      .catch(error => {console.log("error",error)
      })
  };

  render() {
      return (
          <div>
              <h1>Add a Friend!</h1>
              <form onSubmit={this.addFriendToList}>
                <input 
                    type="text"
                    name="name"
                    value={this.state.newFriend.name}
                    onChange={this.handleChange}
                    placeholder="Name"
                />
                <input 
                    type="number"
                    name="age"
                    value={this.state.newFriend.age}
                    onChange={this.handleChange}
                    placeholder="Age"
                />
                <input 
                    type="text"
                    name="email"
                    value={this.state.newFriend.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                />
                <button type="submit" >Add</button>
              </form>
          </div>
      )
  }
}

export default CreateForm;