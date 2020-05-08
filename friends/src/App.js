import React from 'react';
import './App.css';
import LoginForm from './components/LogInForm'
import { Route, Switch } from 'react-router-dom'

// components
import Header from './components/Header'
import WelcomePage from './components/WelcomePage'
import Portfolio from './components/Portfolio'
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={WelcomePage}/>
        <PrivateRoute exact path="/portfolio" component={Portfolio}/>
        {/* <Route exact path="/portfolio" component={Portfolio}/> */}
        <Route exact path="/about" component={() => <h1>it</h1>}/>
        <Route exact path="/login" component={LoginForm}/>
        </Switch>
    </>
  );
}


export default App;
