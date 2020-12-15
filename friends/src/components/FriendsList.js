import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friends: [],
    infos: {
      id: "",
      name: "",
      age: "",
      email: "",
    }
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res);
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    this.setState({
      infos: {
        ...this.state.infos,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleAddFriends = (e) => {
    e.preventDefault();
    // console.log(this.handleAddFriends);
    axiosWithAuth()
      .post('/api/friends', this.state.infos)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected")
      })
      .catch((err) => console.log(err));
   };

  formatData = () => {
    const formattedData = [];
    console.log(this.state.friends)
    this.state.friends.forEach((id, name, age, email) => {
      if (id.friends === 1) {
        formattedData.push({
          key: id,
          id: id,
          name: name,
          age: age,
          email: email,
        });
      }
    });
  };

  render() {
    return (
      <div className="friends-page">
        <h1>These are my Friends!</h1>
        {this.state.friends.map((friend) => {
          return (
            <div className="container-output">
              <p className="p-container-output"><h3>Name: </h3>{friend.name}</p> 
              <p className="p-container-output"><h3>Age: </h3>{friend.age}</p>
              <p className="p-container-output"><h3>Email: </h3>{friend.email}</p> 
              <p className="p-container-output"><h3>Employee Badge #: </h3>{friend.id}</p>
              <p>{" "}</p>
            </div>
          );
        })}
        <form className="form-input" onSubmit={this.handleAddFriends}>
          <h4 className="form-instruct">To add a friend, fill out the form and click "Submit". Then click the log in button, log in, and then you will have added a friend!</h4>
          <input 
           type="number"
           name="id"
           placeholder="employee badge"
           value={this.state.infos.id}
           onChange={this.handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.infos.name}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="age"
            value={this.state.infos.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.infos.email}
            onChange={this.handleChange}
          />
          <button onChange={this.handleChange} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FriendsList;
