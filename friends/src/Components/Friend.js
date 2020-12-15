import React, { Component } from "react";

export default class Friend extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>{this.props.homie.name}</h3>
        <p>Age: {this.props.homie.age}</p>
        <p>Email: {this.props.homie.email}</p>
      </div>
    );
  }
}
