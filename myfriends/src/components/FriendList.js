import axios from "axios"
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import React, { useState, useEffect } from "react";
import Friend from "./Friend"


const initialFormValues = {
    name: "",
    age: null,
    email: "",
  };
  const initialState = [];

function FriendList() {
    const [friendList, setFriendList] = useState(initialState);
    const [formValues, setFormValues] = useState(initialFormValues);
  
    const token = localStorage.getItem("token");
  
    const handleChange = (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
      })
    }
  
    const onSubmit = (e) => {
      e.preventDefault(); 
      axiosWithAuth()
        .post("http://localhost:5000/api/friends", formValues)
        .then(res => {
            setFriendList(res.data);
        })
      
    }

    useEffect(async () => {
        try {
          const { data } = await axiosWithAuth().get(
            "http://localhost:5000/api/friends"
          );
          setFriendList(data);
          console.table(data);
        } catch (err) {
          console.log(err);
        }
      }, []);

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <input 
                type = "text"
                name = "name" 
                values = {formValues.name}
                onChange = {handleChange}
                ></input>
                <input
                type = "email"
                name = "email"
                values = {formValues.email}
                onChange = {handleChange}
                ></input>
                <input
                type = "number"
                name = "age"
                values = {formValues.age}
                onChange = {handleChange}
                ></input>
                <button>Add</button>
            </form>
            {friendList.map((friend) => {
            return <Friend friend={friend} />;
        })}
        </div>
    )
}

export default FriendList
