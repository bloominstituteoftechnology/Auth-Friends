import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Fade,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Table
} from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";

import { modifyFriend, deleteFriend } from "../../actions";
import "./Card.css";

class FriendCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
      somethingChange: false,
      name: "",
      age: "",
      email: "",
      id: ""
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      flipped: !this.state.flipped
    });
  }
  handleChange = e => {
    /** 
     * OLD CODE: AIMED TO WORK NOT WITH FLIPPING-CARDS
    // console.log("hello from handleChange");
    // console.log("e.target.name", e.target.value);
    // this.setState({ [e.target.name]: e.target.value });
    */

    /** If there any property had changed -> update Friends on Server, else -> toggle the card */
    this.state.somethingChange === true ?
    this.props.modifyFriend(this.props.id, this.state)
    : this.toggle();
  };
  /** Submit to modify Friend by pressing 'Enter */
  handleKeyPress = e => {
    this.state.somethingChange === false ? this.setState({ somethingChange: true }) : null;
    console.log("hello form handleKeyPress", e.key, e.target.dataset.property);
    console.log("hello form handleKeyPress", e.key, e.target.innerText);
    const elementInnerText = e.target.innerText;
    const propertyToUpdate = e.target.dataset.property;
    this.setState({ [propertyToUpdate] : elementInnerText });

    e.key === "Enter"
      ? this.props.modifyFriend(this.props.id, this.state)
      : null;
  };
  handleDelete = e => {
    const { id } = this.state;
    const index = this.props.id;
    console.log(index, id);
    this.props.deleteFriend(index, id);
  };

  componentDidMount() {
    const { name, age, email, id } = this.props.friend;
    this.setState({ name, age, email, id });
  }

  render() {
    const { id, name, age, email } = this.props.friend;
    return (
      <div className="friend-card">
        {this.state.flipped === true ? (
          <input className="d-none" type="checkbox" checked />
        ) : (
          <input className="d-none" type="checkbox" />
        )}
        <div className="flippingCard">
          <Table id="front"
            className={
              this.state.flipped === true ? "side front d-none" : "side front"
            }
            >
            <thead>
              <th>Name</th>
              <th name="name" value="">
                {name}
              </th>
            </thead>
            <tbody>
              <tr>
                <td>Age</td>
                <td>{age}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>
                  <Button onClick={this.toggle}>Modify</Button>
                </td>
                <td>
                  <Button onClick={this.handleDelete} className="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table
            onKeyUp={this.handleKeyPress}
            id="back"
            className={
              this.state.flipped === true ? "side back" : "side back d-none"
            }
          >
            <thead>
              <th>Modify:</th>
              <th>
                <div data-property="name" data-id={id} contenteditable="true">{name}</div>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>Age</td>
                <td>
                  <div data-property="age" contenteditable="true">{age}</div>
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <div data-property="email" contenteditable="true">{email}</div>
                </td>
              </tr>
              <tr>
                <td>
                  <Button onClick={this.handleChange}>Apply</Button>
                </td>
                <td>
                  <Button onClick={this.handleDelete} className="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default connect(null, { modifyFriend, deleteFriend })(FriendCard);
