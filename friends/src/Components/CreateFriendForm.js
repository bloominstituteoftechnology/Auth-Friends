import React, { Component } from "react";

class CreateFriendForm extends Component {

    /*
    we need a few things:
    name
    age
    email
    and some sort of button!
  */

  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }


  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


}
