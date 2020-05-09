import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../util/AxiosWithAuth";
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

const AddFriend = () => {
  const [newFriend, setNewFried] = useState({
    name: "",
    age: "",
    email: "",
  });
  const [newFriendAdded, setNewFriendAdded] = useState('')

  const [loading, setLoading] = useState(false);


  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    axiosWithAuth()
      .post('/api/friends', newFriend)
      .then(() => setLoading(false))
      .then(() => setNewFried({
        name: "",
        age: "",
        email: "",   
      }))
      .catch(err => console.log(err))

  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewFried((prevState) => {
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
                Add A Friend!
              </Typography>
            </Grid>
            <form>
              <Grid item>
                <TextField
                  required
                  label="Name"
                  id="name"
                  name="name"
                  value={newFriend.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  label="Age"
                  id="age"
                  name="age"
                  value={newFriend.age}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  label="Email"
                  id="email"
                  name="email"
                  value={newFriend.email}
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

export default AddFriend