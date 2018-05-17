import React, { Component } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  toggleCard = () => {
    console.log("toggleCard clicked");
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { name } = this.props.friend;
    const { toggle } = this.state.toggle;
    console.log("toggle", this.state.toggle);
    return (
      <div className="scene scene--card">
        <div className={this.state.toggle ? "card is-flipped" : "card"}>
          <div
            onClick={this.toggleCard}
            className={`card__face card__face--front`}
          >
            <InputGroup>
              <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
              <h6>{name}</h6>
            </InputGroup>
            <br />
          </div>
          <div
            onClick={this.toggleCard}
            className={`card__face card__face--back`}
          >
            <InputGroup>
              <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
              <Input placeholder={name} />
            </InputGroup>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
