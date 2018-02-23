import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Friends } from './Friends';
import CreateFriendForm from './CreateFriendForm';
import { getFriends } from '../actions';

class App extends Component {

  componentDidMount = () => {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <Friends friends={this.props.friends}/>
        <CreateFriendForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  }
};

export default connect(mapStateToProps, { getFriends })(App);
