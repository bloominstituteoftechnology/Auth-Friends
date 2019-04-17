import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import axios from 'axios'

class App extends Component {
    handleLogin = (state) => {
      const baseUrl = 'http://localhost:5000'
      axios
        .post(`${baseUrl}/api/login`, state)
        .then(res => console.log(res.data.payload))
        .catch(err => console.log(err))
    };

    render() {
        return (
            <Router>
              <Navbar />
                <Route
                    path="/"
                    render={props => (
                        <LoginForm {...props} handleLogin={this.handleLogin} />
                    )}
                />
            </Router>
        );
    }
}

export default App;
