import React, { Component, Fragment } from 'react';
import './App.css';

// My additions
import FriendList from './FriendList';


class App extends Component {
  componentDidMount()  {
    this.props.fetchFriends();
  }

  render() {
    return (
      <Fragment>
      <div className="CTA">
       <h1>let's get weird friendos</h1>
      </div>
      <FriendList />      
      </Fragment>
    );
  }
}

export default App;
