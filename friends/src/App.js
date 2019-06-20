import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
// import GasPrices from './components/GasPrices';
// import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            {/* <Link to="/protected">Protected Page</Link> */}
          </li>
        </ul>
        <Route path="/login" component={Login} />
        {/* <PrivateRoute exact path="/protected" component={GasPrices} /> */}
      </div>
    </Router>
  );
}

export default App;