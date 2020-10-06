import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";
import { useHistory } from "react-router";

const FriendsList = () => {
  //attempt to useHistory to rerender after axios post request

  const history = useHistory();

  //setting up form state and functions

  const [friendForm, setFriendForm] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: "",
  });

  //state for use effect

  const [clicked, setClick] = useState(true);
  const handleChanges = (e) => {
    const newFormData = {
      ...friendForm,
      [e.target.name]: e.target.value,
    };
    setFriendForm(newFormData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", friendForm)
      .then((res) => {
        console.log("SV: FriendsList: handleSubmit: res", res);
      })
      .catch((err) => {
        console.log(friendForm);
      });
  };
  const [data, setData] = useState([]);
  const getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log("SV: FriendsList: handleSubmit: useState: res", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
    console.log("SV: FriendsList: useEffect: data", data);
  }, [clicked]);
  return (
    <div>
      <h2>Friends List:</h2>
      {data.map((friends) => (
        <h3>Name:{friends.name}</h3>
      ))}
      <div>
        <h2>ADD FRIEND</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name:&nbsp
            <input
              type="text"
              name="name"
              placeholder="name"
              value={friendForm.name}
              onChange={handleChanges}
            />
          </label>
          <label htmlFor="age">
            Age:
            <input
              type="text"
              name="age"
              placeholder="age"
              value={friendForm.age}
              onChange={handleChanges}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              placeholder="email"
              value={friendForm.email}
              onChange={handleChanges}
            />
          </label>
          <button onClick={() => setClick(!clicked) && setClick(!clicked)}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default FriendsList;
