import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LogInForm'
import { Route, Switch } from 'react-router-dom'

// components
import Header from './components/Header'
import WelcomePage from './components/WelcomePage'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={WelcomePage}/>
        {/* Portfolio will be protected route */}
        <Route exact path="/portfolio" component={() => <h1>Test test</h1>}/>
        <Route exact path="/about" component={() => <h1>it</h1>}/>
        <Route exact path="/login" component={LoginForm}/>
        </Switch>
    </>
  );
}

export default App;
