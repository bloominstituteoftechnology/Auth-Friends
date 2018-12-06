import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import FriendsList from "./components/FriendsList";
import { connect } from "react-redux";
import { getFriends } from "./store/actions";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const StyledApp = styled.div`
  text-align: center;
  font-size: 1.6rem;
`;

class App extends Component {
  componentDidMount = () => {
    this.props.getFriends();
  };

  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <StyledApp>
          <FriendsList {...this.props} />
        </StyledApp>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  fetchingFriends: state.isFetchingFriends,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getFriends }
)(App);
