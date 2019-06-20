import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { makeFriends, editFriends } from "../../actions";
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
    friend: {
      name: "",
      age: "",
      email: "",
      id: ""
    }
  };
  textHandler = e => {
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.id]: e.target.value
      }
    }));
  };

  componentDidMount = () => {
    this.props.makeFriends();
  };
  optionsHandler = () => {
    if (this.props.friends) {
      return this.props.friends.map(friend => {
        return (
          <option id={friend.id} value={friend.id}>
            {friend.name}
          </option>
        );
      });
    }
  };
  handleChange = event => {
    let friend = this.props.friends.filter(
      friend => friend.id == event.target.value
    );
    console.log(friend);
    if (friend[0]) {
      this.setState({
        friend: {
          name: friend[0].name,
          age: friend[0].age,
          email: friend[0].email,
          id: friend[0].id
        }
      });
    }
  };
  submitHandler = () => {
    this.props.editFriends(this.state.friend);
  };

  render() {
    if (this.props.isloadingGET) {
      return (
        <Container>
          <img src={Spinner} />
        </Container>
      );
    } else {
      return (
        <Card>
          <h2>Update your friends</h2>
          <div>
            <select onChange={this.handleChange}>
              {this.optionsHandler()}
            </select>
          </div>
          <div>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              value={this.state.friend.name}
              onChange={this.textHandler}
            />
          </div>
          <div>
            <Input
              type="text"
              id="age"
              placeholder="Age"
              value={this.state.friend.age}
              onChange={this.textHandler}
            />
          </div>
          <div>
            <Input
              type="text"
              id="email"
              placeholder="Email"
              value={this.state.friend.email}
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
    friends: state.friends,
    isloadingGET: state.isloadingGET,
    successGET: state.successGET,
    isloadingPOST: state.isloadingPOST,
    successPUT: state.successPUT,
    isloadingDELETE: state.isloadingDELETE,
    successDELTE: state.successDELTE
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { makeFriends, editFriends }
  )(FriendForm)
);
