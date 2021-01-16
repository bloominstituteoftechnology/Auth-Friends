import React, {useState, forwardRef} from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Button} from "@material-ui/core";
import AxiosWithAuth from "../utils/AxiosWithAuth";

// Set slide animation
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  function EditFriend({friend, setReload, open, setOpen, reload}) {

    // Setting info for dialog box
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");

      return (
           <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={setOpen(false)}
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
        setOpen(false);
        setReload(!reload);
    }}>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                required
                value={friend.name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="age">Age:</label>
              <input
                id="age"
                required
                value={friend.age}
                onChange={(e) => setAge(e.target.value)}
              />
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                required
                value={friend.email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit">Add Friend</Button>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      )
  }
  
  export default EditFriend
  