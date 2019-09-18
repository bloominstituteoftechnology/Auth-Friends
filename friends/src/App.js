import axios from "axios";
import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { axize } from "./actions/axize";
// import PrivateRoute from "./actions/PrivateRoute";
import "./App.css";
import Add from "./components/Add";
import Friends from "./components/Friends";
import LoginForm from "./components/LoginForm";

function App(props) {
  const [list, setList] = useState([]);

  const submitUser = user => {
    axios
      .post("http://localhost:5000/api/login", user)
      .then(rez => {
        localStorage.setItem("token", rez.data.payload);
        props.history.push("/users");
      })
      .catch(rez => console.error(rez));
  };

  const grabUsers = _ => {
    axize()
      .get("http://localhost:5000/api/friends")
      .then(res => setList(res.data))
      .catch(err => console.error(err));
  };

  const addUser = user => {
    axize()
      .post("http://localhost:5000/api/friends", user)
      .then(rez => setList(rez.data))
      .catch(err => console.error(err));
  };

  const updateUser = user => {
    axize()
      .put(`http://localhost:5000/api/friends/${user.id}`, user)
      .then(res => setList(res.data))
      .catch(err => console.error(err));
  };

  const delUser = id => {
    axize()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(rez => setList(rez.data))
      .catch(err => console.error(err));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>These are my Friends</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/users">Friends</Link>
          </li>
        </ul>
        <Add addUser={addUser} />

        <Switch>
          <Route
            exact
            path="/login"
            render={props => <LoginForm {...props} submitUser={submitUser} />}
          />

          <Route
            exact
            path="/users"
            render={props => (
              <Friends
                {...props}
                grabUsers={grabUsers}
                addUser={addUser}
                updateUser={updateUser}
                delUser={delUser}
                list={list}
              />
            )}
          />
        </Switch>
      </header>
    </div>
  );
}

export default App;
