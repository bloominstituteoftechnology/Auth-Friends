import React from 'react';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ProtectedPage from './components/ProtectedPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App App-header">
        <nav>
          <Link to = '/login'>Log In </Link>
          <Link to = '/protected'>Protected</Link>
        </nav>
        
        <Switch>
          <PrivateRoute exact path = '/protected' component={ProtectedPage}/>
          <Route path = '/login' component = {Login}/>
          <Route component = {Login}/>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;