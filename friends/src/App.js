import React, { Component } from 'react';
import './App.css';
import { getFriends } from './actions';
import { connect } from 'react-redux';
import Friends from './components/Friends'

class App extends Component {
  state = {  
    friend: {}
  };

  componentDidMount() {
    this.props.getFriends();
  }


  render() {
    return (
      <div className="App">
        <header className="App-header"/>
        <Friends {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    pending: state.pending
  }
}

export default connect(mapStateToProps, { getFriends })(App);
