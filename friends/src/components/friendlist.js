import React, { useState, useEffect } from "react";
import axios from 'axios'
import AddFriend from "./AddFriend";
import friend from "./friend";

const Friendlist = ({history}) => {
    const [ friends , setFriends ] = useState('')
   useEffect(() => {
        const token = localStorage.getItem("token")
        const url = "http://localhost:5000/api/friends";
    
        if (token) {
          axios
            .get(url, {
              headers: {
                Authorization: `${token}` 
              }
            })
            .then(response => {
              setFriends(response.data);
            })
            .catch(e => {
              console.log(e.response.data);
              localStorage.removeItem("token");
              history.push("/");
            });
        }
      }, [history]);
  return (
    <div className='holder'>
      <AddFriend />
      {friends.length > 0
        ? friends.map(friend => <friend key={friend.id} friend={friend} />)
        : null}

      <button
        className="btn"
        onClick={() => {
          localStorage.removeItem("token");
          history.push('/')
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Friendlist;