import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import useStyles from "./useStyles";

const Nav = (props) => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="sticky">
      <Button
        onClick={() => {
          history.push("addArtist");
        }}
      >
        Add Artist
      </Button>
      <Button
        onClick={() => {
          history.push("/artists");
        }}
      >
        Artists
      </Button>
      { props.loggedIn
        ? <Button onClick={logout}>Logout</Button>
        :  <Button onClick={() => {
              history.push('/login')
          }}>
              Login
          </Button>
      }
    </AppBar>
  );
};
