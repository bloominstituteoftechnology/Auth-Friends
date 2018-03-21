import React, { Component } from "react";

import FriendListComponent from "./components/FriendListComponent";
import FormComponent from "./components/FormComponent";
import "./App.css";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { addFriends } from "./actions/actions";

class App extends Component {
  render() {
    return (
      <Container className="App my-5">
        <h1 className="my-3">Friend Face</h1>
        <FriendListComponent />
        <FormComponent submit={this.props.addFriends} />
      </Container>
    );
  }
}

export default connect(null, { addFriends })(App);
