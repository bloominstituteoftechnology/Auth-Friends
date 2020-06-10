import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  const loggedIn = () => {
    if(localStorage.getItem("Logged in")) {
      return localStorage.getItem("Logged in");
    }
    return false;
  }
  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn());

  const logOut = () => {
    setIsLoggedIn(false);
    localStorage.setItem("Logged in", false);
    localStorage.removeItem("token");
  }

  return (
    <Router>
        <div className="App">
          <div className="links">
            <p>{!isLoggedIn ? <Link to="/login">Log in</Link> : <Link to="/login"><span onClick={logOut}>Log out</span></Link>}</p>
            <p><Link to="/friends"> Friends List</Link></p>
          </div>
          
          <Switch>
            <PrivateRoute exact path="/friends" component={FriendsList} />
            <Route path="/login" render={(props)=><Login {...props} setIsLoggedIn={setIsLoggedIn}  />} />
            <Route render={(props)=><Login {...props} setIsLoggedIn={setIsLoggedIn}  />} />
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
