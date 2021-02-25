import React, { useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

export default function Login(props) {
  const InitialFormState = {
    credentials: {
      username: "",
      password: "",
    },
  };
  const [form, setForm] = useState(InitialFormState);
  const [isLoading, setIsLoading] = useState(true);

  const login = (e) => {
    console.log(login);
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login/", form.credentials)
      .then((res) => {
        console.log(res.data.payload);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setLoading = () => {
    setIsLoading(true);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <form onSubmit={login}>
          <label htmlFor="name">
            <input
              name="username"
              value={form.credentials.username}
              onChange={handleChange}
            />
          </label>
          <label htmlfor="password">
            <input
              name="password"
              value={form.credentials.password}
              onChange={handleChange}
            />
          </label>
          <div style={{ marginTop: "60px" }}>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
            />
            <button
              className="button"
              onClick={setLoading}
              onChange={handleChange}
              onSubmit={login}
            >
              Login
            </button>
            {isLoading && <Spinner animation="border" role="status"></Spinner>}
          </div>
        </form>
      </div>
    </>
  );
}
