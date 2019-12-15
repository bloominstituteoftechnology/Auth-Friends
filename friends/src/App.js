import React from "react";
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";

import Login from "./Components/Login";
import PrivateRoute from "./utils/PrivateRoute";
// import NavHeader from './Components/NavHeader';
// import Routes from './utils/Routes';
import FriendsList from "./Components/FriendsList";

import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";

function App() {
  return (
    <div>
      <Button>
        <Link to="login">Login</Link>
      </Button>
      <Button>
        <Link to="protected">Friends</Link>
      </Button>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
