import React, { Component } from "react";
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
            className="card__face card__face--front"
          >
            front-{name}
          </div>
          <div
            onClick={this.toggleCard}
            className="card__face card__face--back"
          >
            back-{name}
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
