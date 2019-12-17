import React, { useEffect, useState, Redirect } from "react";
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
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { withRouter } from "react-router-dom";

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
      })

      .catch(err => err);
  };

  const deleteFriend = theid => {
    axiosWithAuth()
      .delete("/friends/" + theid)
      .then(res => {
        setAllFriends(res.data);
        console.log("CONSOLE OUTPUT: delete -> res.data", res.data);
      })
      .catch(err => err);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };
  return (
    <div>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Button
          onClick={onLogout}
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ExitToAppIcon />}
        >
          LogOut
        </Button>
      </ButtonGroup>
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

      <h1>Friends:</h1>

      {allFriends.map((buddy, i) => {
        return (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center"
            }}
          >
            <Card className={classes.card} key={i} style={{ margin: "10px" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <h2>{buddy.name}</h2>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <h3>Age: {buddy.age}</h3>
                    <h3> Email: {buddy.email}</h3>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => deleteFriend(buddy.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(Friends);
