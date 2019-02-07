import React, {Component} from 'react';
import './App.scss';
import {Route} from 'react-router-dom';
import {Home} from './comps/presComp/home.js';
import FriendsList from './comps/presComp/friendsList.js';
import Form from './comps/form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route path="/" component={Home} />
        </header>
        <div className="bodyCont">
          <Route path="/friends" component={FriendsList} />
          <Route path="/friends/addfriend" component={Form} />
        </div>
      </div>
    );
  }
}

export default App;
