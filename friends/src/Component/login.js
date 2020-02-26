import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import axios from "axios";
function Login(props) {
  console.log(props);

  const [formValue, setformValue] = useState({
    userName: "",
    password: ""
  });
  const [isLoading, setisLoading] = useState(false);
  const onchange = e => {
    return setformValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const history = useHistory();
  const onsubmit = e => {
    e.preventDefault();
    //   const username = formValue.userName
    setisLoading(true);

    axios
      .post("http://localhost:5000/api/login", {
        username: formValue.userName,
        password: formValue.password
      })
      .then(response => {
        const token = response.data.payload;
        localStorage.setItem("token", token);
        setisLoading(false);
        history.push("/FriendList");
        // debugger;
      })
      .catch(err => {
        setisLoading(false);
        alert(err.response.data.error);
      });
  };

  return (
    <div>
      <input
        name='userName'
        value={formValue.userName}
        placeholder='enter your user-name'
        type='text'
        onChange={onchange}
      />
      <input
        name='password'
        value={formValue.password}
        placeholder='enter your password'
        type='text'
        onChange={onchange}
      />
      <input type='submit' onClick={onsubmit} />
      {isLoading ? <div>loading </div> : <div></div>}
    </div>
  );
}

export default withRouter(Login);
