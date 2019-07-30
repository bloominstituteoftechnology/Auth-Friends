import React from 'react';
import logo from './logo.svg';
import {Link, Route, Redirect} from 'react-router-dom';
import {PrivateRoute, LoginInfo} from './components';
import {PublicView, LoginView, ProtectedView} from './views';
import './App.css';


function App() {
  return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/public">Public</Link>
            </li>
            <li>
              <Link to="/protected">Protected</Link>
            </li>
          </ul>
          {/* <LoginInfo /> */}
        </nav>
        <Route exact path="/" render={() => {
          return <Redirect to="/public" />;
        }} />
        <Route path="/public" component={PublicView} />
        <Route path="/login" component={LoginView} />
        <PrivateRoute path="/protected" component={ProtectedView} />
      </div>
  );
}

export default App;
