import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsCard from './FriendsCard'


const Friends = () => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
   const getData = () => {

    //get request
    //add the token to the authorization header
    //filter data 
    const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .get("/api/friends")
      .then(response => {
        console.log(response, "friends.js .get request");
        setFriends({friends: response.data});
      })
      .catch(err => console.log(err));
  };
  getData();
}, []);
 
    return (
        <div>
            <h1>Dashboard</h1>
          <div>
            {friends.map(friend => (
              <FriendsCard key={friends.id} friend={friend} />
            ))}
          </div>
          <button >Get Friends List</button>
        </div>
)}

export default Friends;
