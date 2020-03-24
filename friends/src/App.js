import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from "./components/Login";


class App extends React.Component {
  constructor() {
    super();
    this.state = { credentials: {} }
  }
  render() {
    return (
      <Router>
        <Link to='/login'>Login</Link>

        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    )
  }
}
export default App;