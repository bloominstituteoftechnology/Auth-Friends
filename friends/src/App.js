import React, {useState} from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";
import EditFriend from "./components/EditFriend";
import {Button} from 'semantic-ui-react';
import Logout from './components/Logout';

function App(props) {

  const [logged, setLogged] = useState(true);
  return (
    <div className="App">
      {logged && <Button>
      <Link to="/">Log In</Link>
      </Button>}

      {!logged && <Button>
      <Link to="/logout">Log Out</Link>
      </Button>}
      <br />
      <br />

      <PrivateRoute path="/friends" component={props=> <FriendsList {...props} setLogged={setLogged}  />} />
      <PrivateRoute path="/add" component={props=> <AddFriend {...props} />} setLogged={setLogged} />
      <PrivateRoute path="/edit/:id" component={props=> <EditFriend {...props} setLogged={setLogged} />} />
      <Route exact path="/" component={props=> <Login {...props} setLogged={setLogged} />} />
      <Route  path="/logout" component={props=> <Logout {...props} setLogged={setLogged} />} />
    </div>
  );
}

export default App;
