import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../App.css";

const initialFormValues = {
  name: "",
  age: "",
  email: "",
};

//set up a custom hook for the forms?
// set up global state for state management?
// material UI ?

const NewFriendForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formValues: ", formValues);
    axiosWithAuth()
      .post("/api/friends", formValues)
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
  return (
    <div className="friendform-container">
      <h3>Add a Friend!</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            {" "}
            Name:
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </label>

          <label>
            {" "}
            Age:
            <input
              type="text"
              name="age"
              placeholder="age"
              value={formValues.age}
              onChange={handleChange}
            />
          </label>

          <label>
            {" "}
            Email:
            <input
              type="text"
              name="email"
              placeholder="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </label>
          <button>Add Friend</button>
        </form>
      </div>
    </div>
  );
};
export default NewFriendForm;
