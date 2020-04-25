import React from "react";
import "./App.css";
import Login from "./components/Login";
import Friends from "./components/Friends";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="/login" component={Login} />
        </header>
      </div>
    </Router>
  );
}

export default App;
