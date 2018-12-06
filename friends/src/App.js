import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFriends } from "./store/actions";
import { Route, NavLink, withRouter } from "react-router-dom";

import HomeView from "./views/HomeView";
import FriendCard from "./components/FriendCard";
import FormView from "./views/FormView";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    if (this.props.isFetching) return <h2>Loading...</h2>;
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/form/add">Add Friend</NavLink>
        </nav>

        <Route
          exact
          path="/"
          render={props => <HomeView {...props} friends={this.props.friends} />}
        />

        <Route
          exact
          path="/friend/:id"
          render={props => (
            <FriendCard {...props} friends={this.props.friends} />
          )}
        />

        <Route
          exact
          path="/form/add"
          render={props => <FormView {...props} friends={this.props.friends} />}
        />

        <Route
          exact
          path="/form/update"
          render={props => (
            <FormView {...props} friends={this.props.friends} update />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.reducers.friends,
    isFetching: state.reducers.isFetching
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchFriends }
  )(App)
);
