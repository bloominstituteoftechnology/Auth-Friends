import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getFriends } from './actions/actions';
import { connect } from 'react-redux';
import Friends from './components/Friends';
import Form from './components/Form';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    const { friends } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form />
        <Friends friends={friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    error: state.error
  };
};

export default connect(mapStateToProps, { getFriends })(App);
