import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from './actions'
import Friends from './components/Friends';

class App extends Component {
  constructor (props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
    this.props.getFriends()
  }
  render() {
    return (
      <div className="App">
        <Friends {...this.props}/>
      </div>
    );
  }
}

const mapStateToProsp = (state) => {
  return {
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    friends: state.friends,
    error: state.error,
    updatingFriend: state.updatingFriend,
    friendUpdated: state.friendUpdated,
  }
}

const actions = {
  getFriends
}

export default connect(mapStateToProsp, actions)(App);
