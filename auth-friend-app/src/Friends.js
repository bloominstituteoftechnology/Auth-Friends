import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./axiosAuth";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const Friends = props => {
  const initialFormValues = {
    name: "",
    email: "",
    age: ""
  };
  const [friendObject, setFriendObject] = useState(initialFormValues);

  const [allFriends, setAllFriends] = useState([]);
  const useStyles = makeStyles({
    card: {
      maxWidth: 345
    }
  });
  const classes = useStyles();

  const getListOfFriends = () => {
    axiosWithAuth()
      .get("/friends")

      .then(res => setAllFriends(res.data))
      .catch(err => console.log("why", err));
  };
  useEffect(() => {
    getListOfFriends();
  }, []);

  const onValueChange = event => {
    setFriendObject({
      ...friendObject,
      [event.target.name]: event.target.value
    });
  };

  const submit = () => {
    setFriendObject(initialFormValues);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    postNewFriend();
    submit();
  };

  const postNewFriend = () => {
    axiosWithAuth()
      .post("/friends", friendObject)
      .then(res => {
        setAllFriends(res.data);
        console.log("CONSOLE OUTPUT: postNewFriend -> res.data", res.data);
      })

      .catch(err => err);
  };

  return (
    <div>
      <form
        style={{ marginTop: "100px" }}
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onFormSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={onValueChange}
          value={friendObject.name}
          name="name"
        />
        <TextField
          id="outlined-basic"
          label="Age"
          variant="outlined"
          onChange={onValueChange}
          value={friendObject.age}
          name="age"
        />
        <TextField
          id="outlined-basic"
          label="EMail"
          variant="outlined"
          onChange={onValueChange}
          value={friendObject.email}
          name="email"
        />

        <Fab color="primary" aria-label="add" type="submit">
          <AddIcon />
        </Fab>
      </form>

      <h1>List of Friends will be here:</h1>

      {allFriends.map((buddy, i) => {
        return (
          <div key={i}>
            <p>{buddy.name}</p>
            <p>{buddy.email}</p>
            <p>{buddy.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Friends;
