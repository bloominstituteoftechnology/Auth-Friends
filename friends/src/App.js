import React, { Component } from 'react';
import { FriendListView, FriendView, AddView /* FormView*/ } from './views';
import { Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      <Route exact path='/' component={FriendListView}/>
      <Route path='/add' render={(props) => <AddView {...props}/>} />
      <Route path='/:id' render={(props) => <FriendView {...props}/>} />
      </Switch>
      </div>
    );
  }
}

export default App;
