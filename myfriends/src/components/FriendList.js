import axios from "axios"
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import React, { useState, useEffect } from "react";


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
  
    const handleSubmit = (e) => {
      e.preventDefault(); 
      axiosWithAuth()
        .post("http://localhost:5000/api/friends", formValues)
        .then(res => {
            setFriendList(res.data);
        })
      
    }

    useEffect = () => {

    }
    return (
        <div>

            <form>
                <input></input>
                <input></input>
                <input></input>
            </form>
        </div>
    )
}

export default FriendList
