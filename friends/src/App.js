import React, { Component } from "react";

import FriendListComponent from "./components/FriendListComponent";
import FormComponent from "./components/FormComponent";
import "./App.css";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";
import { addFriends } from "./actions/actions";

class App extends Component {
  render() {
    document.body.style.background = "#DDDFDF";

    return (
      <Container className="App my-5 ">
        <Row className=" header d-flex mb-3 justify-content-center">
          <div className=" my-auto">Friend Face</div>
        </Row>
        <FriendListComponent />
        <FormComponent submit={this.props.addFriends} />
      </Container>
    );
  }
}

export default connect(null, { addFriends })(App);
