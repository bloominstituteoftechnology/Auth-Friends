import React, { Component } from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";
import { fetchingData } from "./actions";
import "./App.css";
import Friends from "./components/Friends";
import SaveFriendForm from "./components/SaveFriendForm";
import styled from "styled-components";
import UpdateFriendForm from "./components/UpdateFriendForm";

class App extends Component {
  componentDidMount() {
    this.props.fetchingData();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingFriends ? (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        ) : (
          <AppContainer>
            <SaveFriendForm />
            <UpdateFriendForm/>
            <Friends friends={this.props.friends} />
          </AppContainer>
        )}
      </div>
    );
  }
}
const mapStatesToProps = state => {
  console.log(state.friends);
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends
  };
};

const AppContainer = styled.div``;

export default connect(
  mapStatesToProps,
  { fetchingData }
)(App);
