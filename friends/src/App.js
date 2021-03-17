import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Home from './components/home'
import Login from "./components/login";
import Logout from "./components/logout";
import AddArtist from './components/addArtist'
import Artists from './components/artists'
import PrivateRoute from './components/PrivateRoute'

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


export default function App() {
  return (
    <BrowserRouter>
      <div
        className="d-flex flex-row justify-content-between"
        style={{
          backgroundColor: "white",
          position: "sticky",
          marginTop: "-4.3vh",
        }}
      >
        {" "}
        <AppBar
          color="inherit"
          position="sticky"
          className="d-flex flex-row justify-content-between"
          style={{padding: '1rem 0', marginTop:'-1rem'}}
        >
          <h3 style={{ margin: "1vh 2vw" }}>ストリートアート </h3>
          <br />
          <br />
          <h5 style={{ marginTop: "1.5vh" }}>S T R E E T . A R T</h5>
          <h6 style={{ lineHeight: "2", margin: "1vh 5vw" }}>
            Tokyo . Honolulu . Los Angeles . Seattle
          </h6>

          <div
            className="d-flex flex-row"
            style={{ alignSelf: "end", margin: "0.5vh 2vw" }}
          >
            {" "}
            <Link
              to="home"
              className="btn btn-outline-light"
              style={{ color: "#666" }}
            >
              Home
            </Link>
            <Link
              to="login"
              className="btn btn-outline-light"
              style={{ color: "#666", margin: "0 1rem" }}
            >
              Login
            </Link>
            <Link
              to="/logout"
              className="btn btn-outline-light"
              style={{ color: "#666", margin: "0 1rem" }}
            >
              Logout
            </Link>
            <Link
              to='add'
              className='btn btn-outline-light'
              style={{ color: '#666', margin: '0 1rem'}}
              >
              Add Artist
              </Link>
            <Link
              to="protected"
              className="btn btn-outline-light"
              style={{ color: "#666" }}
            >
              Artists
            </Link>
          </div>
        </AppBar>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ opacity: "0.9" }}
      >
        <Link
          to="Home"
          className="btn btn-outline-light"
          style={{ color: "#666", margin: "50vh 0 " }}
        >
          <h4 style={{ color: "white", padding: "2vh 5vw" }}>Step Inside</h4>
        </Link>
      </div>
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route exact path='/add' component={AddArtist}/>
        <PrivateRoute exact path="/protected" component={Artists} />
      </Switch>
    </BrowserRouter>
  );
}
