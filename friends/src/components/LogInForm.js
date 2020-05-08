import React, { useState } from "react";
import Axios from "axios";
import { axiosWithAuth } from '../util/AxiosWithAuth'
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Button,
  Typography,
  CircularProgress,
  FormHelperText,
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
  error_message: {
    color: "#FF0001",
  },
}));

const LogInForm = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage] = useState(
    "Username or Password incorrect. Please see Readme"
  );

  const classes = useStyles();
//   const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axiosWithAuth()
    .post("/api/login", userData)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push('/portfolio')
      })
      .then(setLoading(false))
      .then(() => {
          setUserData({
              username:"",
              password:""
          })
      })
      
      .catch(() => {
          setError(true)
      });
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
            {error && (
              <FormHelperText className={classes.error_message}>
                {errorMessage}
              </FormHelperText>
            )}
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
