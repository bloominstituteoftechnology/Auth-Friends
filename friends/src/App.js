import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/Friends";
import LogInForm from "./components/LogInForm";
​
​
function App() {
  return (
    <div className="App">
        <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/friends" component={Friends} />
          <Route path="/login" component={LogInForm} />
          <Route component={LogInForm} />
        </Switch>
      </div>
    </Router>
    </div>
  );
};
export default App;















