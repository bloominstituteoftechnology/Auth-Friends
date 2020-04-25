import React from "react";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
      </div>
    </Router>
  );
}

export default App;
