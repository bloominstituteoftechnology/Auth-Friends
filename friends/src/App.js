import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <h1>TESTIN123</h1>}/>
        {/* Portfolio will be protected route */}
        <Route exact path="/portfolio" component={() => <h1>Test test</h1>}/>
        <Route exact path="/about" component={() => <h1>it</h1>}/>
        <Route exact path="/contact" component={() => <h1>working</h1>}/>
        </Switch>
    </>
  );
}

export default App;
