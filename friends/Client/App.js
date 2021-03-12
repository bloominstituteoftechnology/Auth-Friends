import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link, Switch, Form } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./components/home";
import Artists from './components/artists'

function App() {
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path='/artists' component={Artists}/>
    </Switch>
  </BrowserRouter>;
}

export default App;
