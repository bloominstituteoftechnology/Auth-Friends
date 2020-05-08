import React, { useState, useEffect } from "react";
import Axios from 'axios'
import { link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button_style: {
    marginTop: "1rem",
    height: 35,
    width: 160,
    backgroundColor: theme.palette.common.eggshell,
  },
  loader_stylers: {
    color: "#FF0001",
    position: "absolute",
    // top: '10%',
    left: "48%",
    marginTop: "1.5rem",
  },
  login: {
    marginTop: "5rem",
  },
}));

const LogInForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const classes = useStyles();
  const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Welcome, ${userData.username}`);
    setLoading(true);
    Axios.post('http://localhost:5000/api/login', userData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg={4} alignItems="center">
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6" className={classes.login}>
                Log In
              </Typography>
            </Grid>
            <form>
              <Grid item>
                <TextField
                  label="Email"
                  id="email"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  id="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                {loading === false ? (
                  <Button
                    variant="contained"
                    className={classes.button_style}
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    Submit
                  </Button>
                ) : (
                  <CircularProgress
                    size={24}
                    className={classes.loader_stylers}
                    label="Loading"
                  />
                )}
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LogInForm;
