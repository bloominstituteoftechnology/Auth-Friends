import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { addFriends } from "../../actions";
import Spinner from "./spinner.gif";
const Container = styled.div`
  margin: auto;
  display: flex;
  flex-flow: wrap;
  width: 1250px;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  margin: 10px;
  border: none;
  border-bottom: 2px black solid;
  &:focus {
    outline: none;
  }
`;
const Card = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 100px;
  width: 500px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  @media (max-width: 1300px) {
    margin: 10px 0px;
  }
`;
const Btn = styled.button`
  margin: 10px;
  border-radius: 10px;
  border-style: solid;
  cursor: pointer;
`;
class FriendForm extends React.Component {
  state = {
    name: "",
    age: "",
    email: ""
  };
  textHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  submitHandler = () => {
    let friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.props.addFriends(friend);
  };
  componentDidUpdate = () => {
    if (this.props.successPOST) {
      this.props.history.push("/home");
    }
  };
  render() {
    if (this.props.isloadingPOST) {
      return (
        <Container>
          <img src={Spinner} />
        </Container>
      );
    } else {
      return (
        <Card>
          <h2>Add your favorite friends</h2>
          <div>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.textHandler}
            />
          </div>
          <div>
            <Input
              type="text"
              id="age"
              placeholder="Age"
              value={this.state.age}
              onChange={this.textHandler}
            />
          </div>
          <div>
            <Input
              type="text"
              id="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.textHandler}
            />
          </div>
          <Btn onClick={this.submitHandler}>Submit Friend</Btn>
        </Card>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isloadingPOST: state.isloadingPOST,
    successPOST: state.successPOST
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { addFriends }
  )(FriendForm)
);
