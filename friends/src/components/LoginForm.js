// Add a route for a login page and build out a simple login form with username and password inputs and a submit button (design this however you would like).
// The login function should save the returned token to localStorage. You can setup isLoading state in your Login component, and show a spinner on your form or in your button while the login request is happening.
// When the request returns, save the token to localStorage, then use the history object in your Login component to navigate your user to your FriendsList route
// Create a <PrivateRoute /> component to protect your other routes. It should check localStorage for a token, and redirect the user to your login route if there is not a token.
// Create a protected route for your friends list. Remember, if the user isn't logged in, navigating to this protected route will redirect them to the login page.
// In your FriendsList component, rendered with <ProtectedRoute />, you will create a list of your friends that you get from the AP

// ADD  New Friends

// Create a form to collects data for a new friend.
// Make a POST request to add a friend to the database
// Each friend item that is in the friends array should have the following format:

// {
//     id: 1
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
//   }

import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = e => {
    e.preventDefault();
    setForm({ ...form, [e.target.username]: e.target.value });
  };

  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", form)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => console.error(err.response));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="username"
          value={form.username}
        />
        <input
          onChange={handleChange}
          type="text"
          name="password"
          placeholder="password"
          value={form.password}
        />
        <button onClick={login}>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
