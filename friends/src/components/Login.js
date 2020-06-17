import React, {useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
 const [credentials, setCredentials] = useState({
    credentials: {
      username: "lambda",
      password: "school"
    }
  });

 const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
  };

 const login = e => {
    e.preventDefault();
    //make POST request and send credentials object
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(res => {
        console.log(res, "DELETE AFTER")
        window.localStorage.setItem("token", res.data.payload);
        props.history.push("/protected")
      })
      .catch(err => {
        console.log("Could not login", err);
      });
  };

  
    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button>Log in</button>
        </form>
      </div>
    );
}

export default Login;
