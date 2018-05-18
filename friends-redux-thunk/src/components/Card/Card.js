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
  Input
} from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";

import { modifyFriend } from "../../actions";
import "./Card.css";

class FriendCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: true,
      name: "",
      age: "",
      email: ""
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }
  handleChange = e => {
    console.log("hello from handleChange");
    console.log("e.target.name",e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleKeyPress = e => {
      console.log("hello form handleKeyPress"), e.key;
      e.key === "Enter"
      ? this.props.modifyFriend(this.props.friend.id, this.state)
      : null;
    //   e.preventDefault();
  };
  componentDidMount() {
    const { name, age, email } = this.props.friend;
    this.setState({ name, age, email });
  }

  render() {
    const { name, age, email } = this.props.friend;
    return (
      <div className="scene scene--card">
        <Card>
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{`${age} yeras old`}</CardSubtitle>
            <CardSubtitle>{`${email}`}</CardSubtitle>
            <Button onClick={this.toggle}>Modify</Button>
            <Button className="danger">Delete</Button>
          </CardBody>
          <Fade
            onChange={this.handleChange}
            onKeyDown={this.handleKeyPress}
            in={this.state.fadeIn}
            className="mt-3"
          >
            <InputGroup>
              <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
              <Input name="name" placeholder="name" value={this.state.name} />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Age</InputGroupAddon>
              <Input name="age" placeholder="age" value={this.state.age} />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Email</InputGroupAddon>
              <Input
                name="email"
                placeholder="email"
                value={this.state.email}
              />
            </InputGroup>
          </Fade>
        </Card>
      </div>
    );
  }
}

export default connect(null, { modifyFriend })(FriendCard);
