import React, { useState } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core/';

import axios from "axios";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      background: 'white',
      opacity: ".6",
      borderRadius: 3,
    },
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 56,
    padding: '0 30px',
  }
}));


const initialNewFriendValue = {
  name: "",
  age: "",
  email: "",
}

const AddFriend = () => {
  const classes = useStyles();

  const [newFriend, setNewFriend] = useState(initialNewFriendValue);

  const history = useHistory();

  const handleChange = e => {
    const userNewFriendInfo = {...newFriend, [e.target.name]: e.target.value}
    setNewFriend(userNewFriendInfo);
  };

  const addNewFriend = (props) => {
    console.log("addNewFriend fired")
    console.log("newFriend: ", newFriend)
    // console.log("props", props)
    axiosWithAuth().post("/friends", newFriend)
    .then(res => {
      console.log(res);
      // redirect to logged in homepage
      history.push("/protected");
    })
    .catch(err => console.log(err));
  }

  const handleSubmit = (e) => {
    console.log("handleSubmit fired")
    e.preventDefault();
    addNewFriend(newFriend);
  };

return (
  <div className="addfriend-container">
  
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField 
          id="name" 
          label="Name" 
          variant="filled" 
          name="name" 
          value={newFriend.name} 
          onChange={handleChange}
        />
        <TextField 
          id="age" 
          label="Age" 
          variant="filled" 
          name="age" 
          value={newFriend.age} 
          onChange={handleChange}
        />
        <TextField 
          id="email" 
          label="Email" 
          variant="filled" 
          name="email" 
          value={newFriend.email} 
          onChange={handleChange}
        />
      <Button 
        variant="contained" 
        className={classes.button} 
        size="large"
        type="submit"
      >
        Add Friend
      </Button>
    </form>

  </div>
)
};

export default AddFriend;

