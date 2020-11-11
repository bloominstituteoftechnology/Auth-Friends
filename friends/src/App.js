import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
//import { axiosWithAuth } from './utils/axiosWithAuth';
import './App.css';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    localStorage.clear();
  };


  return (
    <Router>
      <div className="App">
        <header>
          <h3><Link to="/login">Log In</Link></h3>
          <h3><Link to="#" onClick={logout}>Log Out</Link></h3>
          <h3><Link to="/dashboard">Dashboard</Link></h3>
        </header>
      
        <Switch>
          <PrivateRoute exact path="/dashboard" component={FriendsList}></PrivateRoute>
          <Route path="/login" render={(props)=>{
            return <Login {...props} setLoggedIn={setLoggedIn} />
          }} />
          <Route component={Login} />
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
