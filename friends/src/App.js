import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  const [ user, setUser ] = useState("");
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/login" component={(props) => <Login {...props} setUser={setUser} />} />
        <PrivateRoute path="/home" component={(props) => <Home {...props} user={user} setUser={setUser} />} />  
      </Switch>
    </div>
  );
}

export default App;
