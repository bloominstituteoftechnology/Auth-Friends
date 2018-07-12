import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { connect } from 'react-redux'
import { getFriends } from '../src/actions'


class App extends Component {

  componentDidMount(){
    this.props.getFriends('http://localhost:5000/api/friends/')
  }

  render() {
    return (
      <div className="App">
        { (this.props.fetching) ? <img src={logo} className="App-logo" alt="logo" /> : this.props.friends.map (friend => <p key={Math.random()}>{friend.name}</p> )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    friend: state.friend,
    fetching:state.fetching,
    fetched:state.fetched,
    posting:state.posting,
    posted:state.posted,
    putting:state.putting,
    put:state.put,
    deleting:state.deleting,
    deleted:state.deleted,
    err:state.err,
  }
}
export default connect(mapStateToProps, {getFriends})(App);
