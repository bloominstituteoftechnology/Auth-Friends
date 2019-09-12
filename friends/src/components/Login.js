import React, { useState } from "react";

const Login = props => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    // const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(user);
    }

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Enter username" value={user.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Enter Password" value={user.password} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
