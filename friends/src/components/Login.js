import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/friends');
      })
      .catch(err => console.log(err.message));
    // console.log('click');
  };

  return (
    //ugh why is this not working properly
    // <form onSubmit={() =>handleSubmit}>
    //   <h2>Login</h2>
    //   <label htmlFor="username">username</label>
    //   <input
    //     type="text"
    //     name="username"
    //     onChange={handleChange}
    //     value={credentials.username}
    //     placeholder="username..."
    //   />
    //   <label htmlFor="password">password</label>
    //   <input
    //     type="password"
    //     name="password"
    //     onChange={handleChange}
    //     value={credentials.password}
    //     placeholder="password..."
    //   />
    //   <button type="submit">Log in</button>
    // </form>
    <div className="login">
      <div className="login-inputs">
        username
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={credentials.username}
          placeholder="username..."
        />
        password
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={credentials.password}
          placeholder="password..."
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
