import React, { Component } from 'react';
import Friends from './containers/Friends';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends</h1>
          <Friends />
        </header>
      </div>
    );
  }
}

export default App;
