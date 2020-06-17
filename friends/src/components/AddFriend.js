import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
  constructor() {
    super();
    this.state = { friend: { id: Date.now(), name: "", age: "", email: "" } };
  }
  submitHandler = e => {
    e.preventDefault();
    axiosWithAuth().post("/api/friends", this.state.friend, {
      headers: {
        ahtorization: window.localStorage.getItem("token")
      }
    });
  };
}
