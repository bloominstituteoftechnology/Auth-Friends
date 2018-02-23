import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import CreateFriendForm from './components/CreateFriendForm';
import Friends from './components/Friends';
import { getFriends } from './actions/actions';

class App extends Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <Friends friends={this.props.friends} />
        <CreateFriendForm />
        {/* <UpdateFriendForm /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getFriends })(App);
