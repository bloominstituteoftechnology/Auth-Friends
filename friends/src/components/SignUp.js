import React from "react";
import { Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function SignUp(props) {
  return (
    <div className="signUpContainer">
      <h1>
        Welcome, new user. Please enter your desired username and password to
        sign up.
      </h1>{" "}
      <form
        className="signUpForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {" "}
        Desired Username:
        <input minlength="2" name="title" onChange={(e) => {}}></input>{" "}
        Password:
        <input minlength="2" name="director" onChange={(e) => {}}></input>{" "}
        Confirm Password:
        <input minlength="2" name="director" onChange={(e) => {}}></input>
        <Button>Complete Registration</Button>
        <Link to="/login">
          <Button>Back</Button>
        </Link>
      </form>
    </div>
  );
}
export default SignUp;
