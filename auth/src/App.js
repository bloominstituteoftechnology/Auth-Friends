import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {AuthContext} from './context/auth';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Login from "./components/Login";
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Friends from './components/Friends';


function App(props) {
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router>
        <div>
            <ul className="Routes">
        <li>
             <Link to="/">Home</Link>
        </li>
        <li>
             <Link to="/login">Log In</Link>
        </li>
        <li>
             <Link to="/add">Add Friend</Link>
        </li>
        <li>
             <Link to="/friends">Friends</Link>
        </li>
      </ul>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/add" component={AddFriend} />
            <PrivateRoute path="/friends" component={Friends} />
        </div>
    </Router>
    </AuthContext.Provider>
)
}

export default App;
