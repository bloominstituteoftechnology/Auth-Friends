import React, { useState } from "react";
import { link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, TextField, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button_style: {
    marginTop: "1rem",
    height: 35,
    width: 160,
    backgroundColor: theme.palette.common.eggshell,
  },
  login: {
      marginTop:"5rem"
  }
}));

const LogInForm = () => {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  console.log(
    "%c State info",
    "color:yellow",
    userData.userName,
    userData.password
  );
  const classes = useStyles();
  const theme = useTheme();

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
    <Grid container direction="row"  >
      <Grid item container direction="column" lg={4} alignItems="center" >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6" className={classes.login}>Log In</Typography>
            </Grid>
            <Grid item>
              <TextField
                label="Email"
                id="email"
                name="userName"
                value={userData.userName}
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
              <Button variant="contained" className={classes.button_style}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LogInForm;
