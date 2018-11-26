import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { handleFriends } from './actions/actions'
import FriendContainer from './components/FriendContainer';

class App extends Component {
componentDidMount(){
 this.props.handleFriends()
}
  render() {
    return (
      <div className="App">
      <FriendContainer friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
 console.log(state.friends)
 const { friends } = state
 return {
   friends: friends
 }
}
export default connect(mapStateToProps, { handleFriends })(App);
