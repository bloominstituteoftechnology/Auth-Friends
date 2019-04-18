import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleLogin } from './actions/index';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Route
                    path="/"
                    render={props => (
                        <LoginForm {...props} handleLogin={this.props.handleLogin} />
                    )}
                />
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    isLoading: state.isLoading,
    token: state.token,
    error: state.error
});

export default connect(
    mapStateToProps,
    { handleLogin }
)(App);
