import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { getFriends } from './Actions/actions';

import './App.css';
import Friend from './Components/Friend';

class App extends Component {

  componentDidMount(){
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <header>We have friends!</header>
        <NavLink to="/add">Add a new friend</NavLink>

        {this.props.friends.map( friend =>
          < Friend friend={friend} key={friend.id} />
        )}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  friends: state.friends,
  error: state.error,
  loading: state.loading
  }
};

export default connect(mapStateToProps, { getFriends } )(App);
