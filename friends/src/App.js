import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./components/Login";
import List from './components/List';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
  <Router>
      <Route path='/' component={Login}/>
      <PrivateRoute exact path='/friends' component={List} />
    </Router>
  );
}

export default App;
