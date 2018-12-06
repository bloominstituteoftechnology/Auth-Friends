import React, { Component } from 'react';
import './App.css';

import ListView from './views/ListView';
import FormView from './views/FormView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListView />
        <FormView />
      </div>
    );
  }
}

export default App;
