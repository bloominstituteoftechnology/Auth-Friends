import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/loginForm";
import { login } from "./actions/index";
function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
