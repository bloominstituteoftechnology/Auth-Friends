import React, { Component } from "react";

export default class Friend extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Name: <p>{this.props.homie.name}</p>
        Email: <p>{this.props.homie.email}</p>
      </div>
    );
  }
}
