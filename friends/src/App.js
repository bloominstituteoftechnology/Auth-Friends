import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends';
import CreateFriend from './components/CreateFriend';

class App extends Component {
  constructor(){
    super();
    this.state = {
      addFriend: false
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Friends</h1>
        </header>
        {this.state.addFriend ? (
          <CreateFriend/>
        ) : (
          <React.Fragment>
            <Friends/>
            <button 
              className="btn"
              onClick={() => {this.setState({addFriend: true})}}>
              New Friend
            </button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
