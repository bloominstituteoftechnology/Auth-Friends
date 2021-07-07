import logo from "./logo.svg";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/private">Private Page</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/friends">
            <Friends />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
