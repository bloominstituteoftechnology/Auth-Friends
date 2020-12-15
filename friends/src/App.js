import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import { axiosWithAuth } from "./utils/axiosWithAuth";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  const logout = (e) => {
    e.preventDefault();

    //axiosWithAuth()
    //.post()
    //.then()
    localStorage.removeItem("token");
    window.location.href = "/login";
    //.catch()
  };
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/protected">Friends List</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li onClick={logout}>Logout</li>
          </ul>
        </nav>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route path="/protected" component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
