import React, { Component } from 'react';
import axios from 'axios';

import Friends from './components/friends';
import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get('http://localhost:5000/api/friends')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Friends />
      </div>
    );
  }
}

export default App;
