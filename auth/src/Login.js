import React, { useState } from "react";
import axios from "axios";

const initialFormValues = {
  username: "",
  password: "",
};
const Login = (props) => {
  const [values, setValues] = useState(initialFormValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
      e.preventDefault();
      axios
      .post('http://localhost:5000/api/login', values)
      .then(res=>{
          console.log(res)
          localStorage.setItem('token', res.data.payload)
          window.location.href = '/getfriends'
      })
      .catch(err=>{
          console.log('axios login error', err)
      });
      
  }
  console.log(values)
  return (
    <div>
      <form onSubmit={submit}>
        <label>
          Username
          <input
            type="text"
            value={values.username}
            onChange={handleChange}
            name="username"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            name="password"
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};
export default Login;
