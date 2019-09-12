import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./AxiosAuth";

const EditFriend = props => {
    const id = props.match.params.id;
    console.log(id);
    
  const [display, setDisplay] = useState(false);
  const [friend, setFriend] = useState({
    id: null,
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
      id: Date.now()
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (friend.name != "" && friend.age != "" && friend.email != "") {
      axiosWithAuth()
        .post("http://localhost:5000/api/friends", friend)
        .then(res => {
          props.history.push("/friends");
        })
        .catch(err => {});

      setFriend({
        id: null,
        name: "",
        age: "",
        email: ""
      });
    }
  };

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setDisplay(true);
      })
      .catch(err => {
        localStorage.setItem("token", null);
        props.history.push("/login");
      });
  }, []);

  return (
    <div>
      {display && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={friend.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={friend.age}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={friend.email}
            onChange={handleChange}
          />
          <button>Add my new friend!!</button>
        </form>
      )}
    </div>
  );
};

export default EditFriend;
