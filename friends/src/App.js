import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div>
        <Friends />
      </div>
    );
  }

  state = {
    friend: null,
  };

  componentDidMount() {

    axios
      .get(`http://localhost:/5000/src/components/Friends`)
      .then(response => this.setState(() => ({ friend: response.data })))
      .catch(error => {
        console.error(error);
      });
  }

}

export default App;
