import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ContactPage from './Components/ContactPage'

class App extends Component {

  constructor () {
    super();

    this.state = {

      name: '',
      age: '',
      email: '',
    }
  }
  render() {
    return (
      <div className="App">
        <ContactPage />
      </div>
    );
  }
}

export default App;
