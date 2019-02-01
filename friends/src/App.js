import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import FriendListView from './views/FriendListView';
import FriendView from './views/FriendView';
import FormView from './views/FormView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <NavLink to='/api/friends'>Home</NavLink>
        <br />
        <NavLink to='/form'>Add A Friend</NavLink>
      </div>
        <Route exact path='/api/friends' render={props => <FriendListView {...props} />}/>
        <Route path='/api/friends/:id' render={props => <FriendView {...props} />}/>
        <Route path='/form' render={props => <FormView {...props} />} />
      </div>
    );
  }
}


export default App;
