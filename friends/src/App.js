import React, { Component } from 'react';
import './App.css';
import { fetchFriend, createFriend } from './actions';

class App extends Component {

state = {
  friend: ''
};

  render() {
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input 
          placeholder="Friend" 
          type="text"  
          value={this.state.friends} 
          onChange={(e) => this.setState({
            [e.target.name]: e.target.value
          })} 
          />
      </div>;
  }
}


mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    pending: state.pending
  }
}
export default App;
