import React from "react";
import axiosWithAuth from "./axiosAuth";
import styled from "styled-components";

class Friends extends React.Component {
  state = {
    newFriend: {
      name: "",
      age: "",
      email: ""
    },
    friendsList: []
  };

  handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };
  createFriend = e => {
    axiosWithAuth()
      .post("./friends", this.state.newFriend)
      .then(res => {
        this.props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log(res);
        this.setState({ friendsList: res.data });
      });
  }

  render() {
    return (
      <div>
        <FormDiv onSubmit={this.createFriend}>
          <h2>Add New Friend</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.newFriend.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.newFriend.email}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.newFriend.age}
            onChange={this.handleChange}
          />
          <StyledButton type="submit"> Add </StyledButton>
        </FormDiv>
        {this.state.friendsList.map(friends => {
          return (
            <ListDiv key={friends.id}>
              <p>Name: {friends.name}</p>
              <p>Email: {friends.email}</p>
              <p>Age: {friends.age}</p>
            </ListDiv>
          );
        })}
      </div>
    );
  }
}
export default Friends;
const FormDiv = styled.form`
  background: #29335c;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  height: 13em;
  max-width: 300px;
  padding: 15px;
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-top: 0;
    margin-bottom: 5%;
    color: #e4572e;
  }
  input {
    padding: 6px;
    background: none;
    border: none;
    color: white;
    border-bottom: 1px solid white;
    margin-top: 0;
    font-size: 1em;
    ::placeholder {
      color: white;
    }
  }
`;

const StyledButton = styled.button`
  background: #a4a89f;
  font-size: 1em;
  margin-top: 10%;
  padding: 7px 15px 7px 15px;
  border: none;
  border-radius: 3px;
`;

const ListDiv = styled.div`
  background: #669bbc;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  max-width: 250px;
  padding: 10px;
  margin: 16px auto;
  text-align: center;
`;
