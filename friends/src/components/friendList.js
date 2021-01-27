import React, { useState, useEffect } from "react";
import Friend from "../components/friends";
import { axiosWithAuth } from "./../utils/axiosWithAuth";

const initialFormValues = {
  name: "",
  age: null,
  email: "",
};
const initialState = [];

export function GetFriends(props) {
  const [friendList, setFriendList] = useState(initialState);
  const [formValues, setFormValues] = useState(initialFormValues);
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", formValues)
      .then((res) => {
        setFriendList(res.data);
        console.table(res.data, "posted friend");
      });
  };

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
      <h1>Friend list</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formValues.name}
          />
        </label>
        <br></br>
        <label>
          Age:
          <input
            type="text"
            name="age"
            onChange={handleChange}
            value={formValues.age}
          />
        </label>
        <br></br>
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formValues.email}
          />
        </label>
        <br></br>
        <button>Add New Friend</button>
      </form>
      <div className="cardContainer">
        {friendList.map((friend) => {
          return <Friend friend={friend} />;
        })}
      </div>
    </div>
  );
}
export default GetFriends;
