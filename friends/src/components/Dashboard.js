import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAccount } from '../actions/friendsActions';

class App extends Component {
  componentDidMount() {
    this.props.getAccount();
  }

  logout = e => {
    e.preventDefault();

    localStorage.removeItem('token');
    this.props.history.push('/login');
  };

  render() {
    return (
      <>
        <button type='button' onClick={this.logout}>
          Logout
        </button>
        <h1>Dashboard</h1>
      </>
    );
  }
}

const mapDispatchToProps = {
  getAccount
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
