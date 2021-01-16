import React, {useEffect, useState, forwardRef} from 'react';
import axios from "axios";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import EditFriend from "./EditFriend";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Button} from "@material-ui/core";
import Header from "./Header"

// Set slide animation
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function FriendsList() {

    const [friends, setFriends] = useState ([]);
    const [error, setError] = useState("");
    const [reload, setReload] = useState(false);

    // Setting info for dialog box
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");

    // const editFriend = (e) => {
    //     e.preventDefault();
    //     AxiosWithAuth().put(`friends/:${friend.id}`, {
    //         name,
    //         age,
    //         email
    //     })
    //     setOpen(false);
    //     setReload(!reload);
    // }

    const token = localStorage.getItem("token");


    useEffect(() => {
        AxiosWithAuth().get("/friends")
        .then(res => setFriends(res.data))
        .catch(err => setError(err.message));
    }, [reload]);

    // console.log(friends)
    
    return (
        
        <div className="friends">
          <Header />
            {token
            ? <div className="friends-content">
                  {friends.map(friend => {
                    //   return <FriendBox key={friend.id} friend={friend}/>
                    return (
                   <div className="friendBox" key={friend.id}>
                    <h1>{friend.name}</h1>
                   <h3>Age: {friend.age}</h3>
                   <h2>{friend.email}</h2>
                   <a onClick={() => setOpen(true)}>
                       <EditIcon />
                   </a>
                   <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Edit Friend"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <form onSubmit={(e) => {
        e.preventDefault();
        AxiosWithAuth().put(`friends/:${friend.id}`, {
            name,
            age,
            email
        })
        .then(
          setOpen(false),
        setReload(!reload) 
        )
        
    }}>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                required
                placeholder={friend.name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="age">Age:</label>
              <input
                id="age"
                required
                placeholder={friend.age}
                onChange={(e) => setAge(e.target.value)}
              />
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                required
                placeholder={friend.email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit">Update Friend</Button>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      )
                       <a onClick={(e) => {
                           e.preventDefault();
                           setReload(!reload);
                           console.log("clicked");
                           AxiosWithAuth().delete(`/friends/${friend.id}`)
                       }}>
                           <DeleteForeverIcon />
                       </a>
                   </div>
                    )
                  })}
             </div> 
             : <div className="error-box"><h1>You Must Sign In First</h1></div>} 
        </div>
    )
}

export default FriendsList
