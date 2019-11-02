import React from 'react';
import './App.css';
import {getToken} from './utils/api'
import {Link, Route, withRouter} from 'react-router-dom'
import Login from './components/Login';


function App() {
  const loggedIn = getToken()
  return (
    <div className="App">
     <nav>
       <Link to='/'>Home</Link>
      <Link to='/login'>Log In</Link>

     </nav>
    <Route exact path='/login' component={Login} />
    </div>
  );
}

export default App;
