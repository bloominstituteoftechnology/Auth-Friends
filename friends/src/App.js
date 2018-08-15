import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends';
import { connect } from 'react-redux';
import { fetchFriends } from './actions';

class App extends Component {
  componentDidMount(){
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="App">
        <Friends friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    friends: state.friends,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchFriends })(App);
