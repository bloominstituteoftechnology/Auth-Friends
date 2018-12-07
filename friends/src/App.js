import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchFriends,
  addFriend,
  updateFriend,
  deleteFriend
} from "./store/actions";
import { Route, NavLink, withRouter } from "react-router-dom";

import HomeView from "./views/HomeView";
import FriendView from "./views/FriendView";
import FormView from "./views/FormView";

import { AppWrapper } from "./styled/wrapper";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    if (this.props.isFetching) return <h2>Loading...</h2>;
    return (
      <AppWrapper>
        <nav>
          <NavLink to="/">
            <h4>Home</h4>
          </NavLink>
          <NavLink to="/form/add">
            <h4>Add Friend</h4>
          </NavLink>
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
            <FriendView
              {...props}
              deleteFriend={this.props.deleteFriend}
              friends={this.props.friends}
            />
          )}
        />

        <Route
          exact
          path="/form/add"
          render={props => (
            <FormView
              {...props}
              addFriend={this.props.addFriend}
              updateFriend={this.props.updateFriend}
              friends={this.props.friends}
            />
          )}
        />

        <Route
          exact
          path="/form/update/:id"
          render={props => (
            <FormView
              {...props}
              friends={this.props.friends}
              addFriend={this.props.addFriend}
              updateFriend={this.props.updateFriend}
              update
            />
          )}
        />
      </AppWrapper>
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
    { fetchFriends, addFriend, updateFriend, deleteFriend }
  )(App)
);
