import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends.js';
import { connect } from 'react-redux';
import { fetch, addFriend, removeFriend } from './actions';

class App extends Component {
    constructor(props)  {
        super(props);
    }

    componentDidMount() {
        this.props.fetch()
    }

  render() {
    return (
      <div className="App">
        {this.props.fetching === true ? (<h1>LOADING</h1>) : <Friends addFriend={this.props.addFriend} removeFriend={this.props.removeFriend} friends={this.props.friends}/>}
      </div>
    );
  }
}

const mapStateToProps   =   state   =>  {
    return {
        friends: state.friendReducer.friends,
        fetching: state.friendReducer.fetching,
        error: state.friendReducer.error
    }
}
export default connect(
  mapStateToProps,
  { fetch,
    addFriend,
    removeFriend }
)(App);
