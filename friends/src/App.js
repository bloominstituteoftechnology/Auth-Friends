import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Friends List</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
