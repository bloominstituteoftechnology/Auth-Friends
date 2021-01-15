import React, {useState} from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import {Modal, Button} from "@material-ui/core";

import axios from 'axios';

function FriendBox({friend, reload}) {

    //Controlling Modal and setting updated values
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(friends.name ? friends.name : "")
    const [age, setAge] = useState(friends.age ? friends.age : "")
    const [email, setEmail] = useState(friends.email ? friends.email : "")

    const id = friend.id;


    const deleteFriend = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:5000/api/friends/${id}`)
        .then(reload.setReload(!reload))
    }

    const updateFriend = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/friends/:${id}`, 
        payload={
            name,
            age,
            email
        })
        .then(reload.setReload(!reload))
    }

    return (
        <div className="wrapper">
             <Modal
          open={open}
          onclose={(e) => setOpen(false)}
          className={classes.paper}
          id="modal"
        >
            <div>
                <h1>Edit Friend</h1>
                <div>
                  <label htmlFor="name">Edit Name:</label>
                  <input id="name" value={name} onChange={e => setName(e.target.value)} /> 
                  <label htmlFor="age">Edit Age:</label>
                  <input id="age" value={age} onChange={e => setAge(e.target.value)} /> 
                  <label htmlFor="email">Edit Email:</label>
                  <input id="email" value={email} onChange={e => setEmail(e.target.value)} />    
                </div>
                <div>
                    <Button onClick={updateFriend}>Update</Button>
                </div>
            </div>
        </Modal>
        <div className="friendBox">
            <h1>{friend.name}</h1>
            <h3>{friend.age}</h3>
            <h2>{friend.email}</h2>
            <a onClick={open.setOpen(true)}>
                <EditIcon />
            </a>
            <a onClick={deleteFriend}>
                <DeleteForeverIcon />
            </a>
        </div>
        </div>
    )
}

export default FriendBox
