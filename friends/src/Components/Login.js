import React, { useState } from "react";
import axios from "axios";

export default function Login(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  return (
    <div>
      <form>
        <label htmlFor="username">
          Username:
          <input id="username" type="text" placeholder="username" />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input id="password" type="text" placeholder="password" />
        </label>
      </form>
    </div>
  );
}
