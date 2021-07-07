import React, { useState } from "react";
import axios from "axios";

const initialFormValues = {
  username: "",
  password: "",
  errors: {
    username: "",
    password: "",
    misc: "",
  },
};

const Login = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username: "Lambda School",
      password: "i<3Lambd4",
      // username: formValues.username,
      // password: formValues.password,
    };
    axios
      .post("http://localhost:5000/api/login", newUser)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        console.log("props: ", props);
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="username"
              value={formValues.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </label>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
