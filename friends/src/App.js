import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Grid, Button, Menu, MenuItem } from "@material-ui/core";

import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import NewFriend from "./components/NewFriend";

function App() {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="App">
      <Router>
        <Button
          variant="contained"
          color="primary"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu
          color="primary"
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Button className="logout" color="secondary">
            <Link to="/friendslist">Friends List</Link>
          </Button>
          <Button className="logout" color="secondary">
            <Link to="/addfriend">Add Friend</Link>
          </Button>
          <Button className="logout" color="secondary" onClick={logout}>
            logout
          </Button>
        </Menu>

        <Switch>
          <PrivateRoute path="/friendsList" component={FriendsList} />
          <PrivateRoute path="/addfriend" component={NewFriend} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;