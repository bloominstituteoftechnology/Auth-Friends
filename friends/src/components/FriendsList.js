import React, {useEffect, useState} from 'react';
import axios from "axios";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import {Modal, Button} from "@material-ui/core";

function FriendsList() {

    const [friends, setFriends] = useState ([]);
    const [error, setError] = useState("");
    const [reload, setReload] = useState(false);

        //Controlling Modal and setting updated values
        // const [open, setOpen] = useState(false);
        // const [name, setName] = useState("")
        // const [age, setAge] = useState("")
        // const [email, setEmail] = useState("")

    const token = localStorage.getItem("token");


    useEffect(() => {
        AxiosWithAuth().get("/friends")
        .then(res => setFriends(res.data))
        .catch(err => setError(err.message));
    }, [reload]);

    // console.log(friends)
    
    return (
        
        <div className="friends">
            {token
            ? <div className="friends-content">
                  {friends.map(friend => {
                    //   return <FriendBox key={friend.id} friend={friend}/>
                    return (
                   <div className="friendBox" key={friend.id}>
                    <h1>{friend.name}</h1>
                   <h3>{friend.age}</h3>
                   <h2>{friend.email}</h2>
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
             : <div className="error-box"><h1>You Must Log In First</h1></div>} 
        </div>
    )
}

export default FriendsList
