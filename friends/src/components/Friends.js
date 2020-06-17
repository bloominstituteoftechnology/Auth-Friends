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
        console.log(response, "FRIENDS.JS GET");
        setFriends(response.data);
      })
      .catch(err => console.log(err));
  };
  getData();
}, []);


const postFriend = friend => {
  axiosWithAuth()
    .post('/api/friends', friend)
    .then(res => {
      console.log(res, "new friend post")
      setFriends([
        ...friends,
        friend
      ])
    })
}


const addFriend = e => {
  e.preventDefault()
  postFriend(newFriend)
}

const [newFriend, setNewFriend] = useState({name: '', age: ''})
const inputChange = e => {
  setNewFriend({
    ...newFriend,
    [e.target.name]: e.target.value
 })
}

 
    return (
        <div>
            <h1>Dashboard</h1>
            <form onSubmit={addFriend}>
              <input type="text" name="name" onChange={inputChange} placeholder="name" required/>
              <input type="text" name="age" onChange={inputChange} placeholder="age" required/>
              <button>Add Friend</button>
            </form>
          <div>
            {friends.map(friend => (
              <FriendsCard key={friend.id} friend={friend} />
            ))}
          </div>
        </div>
)}

export default Friends;
