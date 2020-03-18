import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// what is a header ?
// its just a metadata about the request that allows us to attach some data to our request
// without putting in the body of the request

// the too long didn't read
// client(user) sign up and need to introduce themselves to the api
// the server takes the credentials and stores somewhere in the data base
// so when the user login in saying hey this is my information  i need to be auth
// the server takes them and make sure all the information are a match
// generate a token for the user and good to go and have fun.
