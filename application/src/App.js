import React from "react";
import { Route } from "react-router-dom";
import { PrivateRoute } from './helpers';
import FriendList from "./components/FriendList";
import { connect } from "react-redux";
import { getFriends, login } from "./actions";
import Nav from "./components/Nav";
import Login from "./components/Login";

import "semantic-ui-css/semantic.min.css";

function App(props) {
    return (
        <>
            <Nav />
            <Route
                {...props}
                exact
                path="/login"
                render={routeProps => (
                    <Login
                        {...routeProps}
                        {...props}
                        // isLoggedIn={props.isLoggedIn}
                        // login={props.login}
                        // isLoading={props.isLoading}
                    />
                )}
            />
            <PrivateRoute
                {...props}
                exact
                path="/friends"
                render={routeProps => (
                    <FriendList
                        {...routeProps}
                        {...props}
                        // friends={props.friends}
                        // getFriends={getFriends}
                        // isLoggedIn={props.isLoggedIn}
                        // isLoading={props.isLoading}
                    />
                )}
            />
        </>
    );
}
const mapStateToProps = state => ({
    friends: state.friends,
    error: state.error,
    isLoading: state.isLoading,
    isLoggedIn: state.isLoggedIn
});
export default connect(
    mapStateToProps,
    { getFriends, login }
)(App);
