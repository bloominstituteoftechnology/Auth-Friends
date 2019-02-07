import React, {Component} from 'react';
import './App.css';
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
          <Route exact path="/friends" component={FriendsList} />
          <Route exact path="/addfriend" component={Form} />
        </div>
      </div>
    );
  }
}

export default App;
