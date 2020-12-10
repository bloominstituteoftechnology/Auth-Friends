import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Login from "./components/Login"
import FriendsList from "./components/FriendsList"
import AddFriends from "./components/AddFriends"
import "./App.css"

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/friends">Friend's List</Link>
        </li>
        <li>
          <Link to="/add">Add Friends</Link>
        </li>
        <li>
          <Link>Delete Friends</Link>
        </li>
      </ul>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/protected" component={FriendsList} />
      <Route path='/protected' component={AddFriends} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
