import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { axiosWithAuth } from "./axiosAuth";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
export const Login = props => {
  const [userId, setUserId] = useState({
    username: "",
    password: "",
    loggedIn: false
  });

  const onValuechange = event => {
    setUserId({
      ...userId,
      [event.target.name]: event.target.value
    });
  };

  const onlogin = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", userId)
      .then(res => {
        console.log(res);
        window.localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };

  const useStyles = makeStyles({
    card: {
      maxWidth: 345
    }
  });
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={onlogin}
    >
      <TextField
        id="outlined-basicc"
        label="UserName"
        variant="outlined"
        name="username"
        value={userId.username}
        onChange={onValuechange}
        type="text"
      />

      <TextField
        style={{ color: "white", paddingRight: "40px" }}
        id="outlined-basic"
        label="Password"
        variant="outlined"
        name="password"
        value={userId.password}
        onChange={onValuechange}
        type="password"
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<VpnKeyOutlinedIcon />}
        type="submit"
      >
        LogIn
      </Button>
    </form>
  );
};
