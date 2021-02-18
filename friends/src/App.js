import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from "./components/Login";
import AddFriend from "./components/AddFriendForm";
import FriendList from "./components/FriendList";
import RemoveFriend from "./components/RemoveFriendForm";
import UpdateFriend from "./components/UpdateFriendForm";
import PrivateRoute from "./components/PrivateRoute";

import './App.css';

function App() {
  // possibly for use within component
  const logout = () => {
    localStorage.removeItem('token');
    console.log(`ab: App.js: logout: "log back in"`)
  };

  return (
    <Router>
      <div className="App">
      <header className="App-header">
        {/* spans used for bullet styling */}
        <h1>
          <span className="aspan">• </span>Hang<span className="bspan"> •</span> With<span className="cspan"> •</span> Friends<span className="dspan"> •</span> 
        </h1>
       
      </header>

      <ul className="nav" id="nav">
        {/* li class names refer to css bullet styling */}
        <li className="a">
          <Link to="/login">Log-In</Link>
        </li>
        <li className="b">
          <Link to="/friendlist">My Friends</Link>
        </li>
        <li className="c">
          <Link to ="/add">Add a Friend</Link>
        </li>
        <li className="d">
          <Link to="/update">Edit/Delete</Link>
        </li>
        <li className="e">
          <Link to="/login" onClick={logout}>LogOut</Link>
        </li>
      </ul>
      <div className="main-content">
        <Switch>
          <PrivateRoute exact path="/friendlist" component={FriendList} />
          <PrivateRoute exact path="/add" component={AddFriend}/>
          <PrivateRoute path="/update" component={UpdateFriend} />
          <PrivateRoute path="/remove" component={RemoveFriend} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
          
          {/* <PrivateRoute />
          <PrivateRoute /> */}
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
