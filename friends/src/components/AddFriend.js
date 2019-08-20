import React, { useState } from "react";
import  { axiosWithAuth }from "../utillities/axiosWithAuth";

function AddFriend(props){
    const [name, setName] = useState({
        name: "",
        age: "",
        email: "",
        id: Date.now()
    });
    const changeHandler = event => {
        event.preventDefault();
        setName({ ...name, [event.target.name]: event.target.value });
    };
  
    function addFriend(e) {
      e.preventDefault();
      axiosWithAuth()
        .post("http://localhost:5000/api/friends", name)
        .then(res =>{
        console.log('friends', res.data)
        })
        .catch(err => {
            console.log(err.response)
        });
        window.location.href = window.location.href;
    }
  
    return (
      <div className="addContainer">
        <form
          className="form"
          onSubmit={event => addFriend(event)}>
          <h1 className="loginTitle">Add More Friends</h1>
          <p className="form-group">
            <label>
              Name:
              <input
                className="input"
                type="text"
                name="name"
                onChange={changeHandler}
                value={name.name}
              />
            </label>
          </p>
  
          <p className="form-group">
            <label>
              Age:
              <input
                className="input"
                type="age"
                name="age"
                onChange={changeHandler}
                value={name.age}
              />
            </label>
          </p>
  
          <p className="form-group">
            <label>
              Email:
              <input
                className="input"
                type="email"
                name="email"
                onChange={changeHandler}
                value={name.email}
              />
            </label>
          </p>
  
          <button className="btn" onClick={addFriend}>
            Add Friend
          </button>
        </form>
      </div>
    );
  };
  
  export default AddFriend;