import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import List from "./List";
import PrivetRoute from "./PrivetRoute";
// import CreateForm from "./CreateForm";

function Routes() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">My Friends</Link>
          </li>
          {/* <li>
            <Link to="/create">Add a Friend</Link>
          </li> */}
        </ul>
        <Switch>
          <PrivetRoute exact path="/protected" component={List} />
          <Route path="/login" component={Login} />
          {/* <Route path="/create" component={CreateForm} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
