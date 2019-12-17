import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
        <Link to='/login'>Login</Link>
      </nav>
        <Route path='/login' component={Login}/>
      </Router>
      
      
    </div>
  );
}

export default App;
