import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Friends from "./components/Friends";
import FriendsAdd from "./components/FriendsAdd";
import FriendsDelete from "./components/FriendsDelete";
import FriendsEdit from "./components/FriendsEdit";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          <Route path="/Friends" component={Friends} />
          <Route path="/FriendsAdd" component={FriendsAdd} />
          <Route path="/FriendsDelete" component={FriendsDelete} />
          <Route path="/FriendsEdit" component={FriendsEdit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
