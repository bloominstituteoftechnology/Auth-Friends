import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './Components/Home'
import Edit from './Components/Edit'

class App extends Component {
  render() {


    return (
      <div>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/friends/edit/:id' component={Edit}></Route>
      </div>
    );
  }
}

export default App;
