import React, { useState } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

// COMPONENTS
import Login from './components/Login';

const initialLoginCredentials = {
  username: '',
  password: ''
}

function App() {

  const [loginCredentials, setLoginCredentials] = useState(initialLoginCredentials);
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
      </nav>
      <div>
        <Route exact path="/" component={Login} />
      </div>
    </div>
  );
}

export default App;
