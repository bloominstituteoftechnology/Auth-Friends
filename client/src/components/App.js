import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FriendsList from './FriendsList';
import SingleFriend from './SingleFriend';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={FriendsList} />
          <Route path="/friends/:id" component={SingleFriend} />
        </Switch>
      </Router>
    );
  }
}

export default App;
