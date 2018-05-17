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
    this.state = { fadeIn: true,
        newName: '',
        age: '',
        email: ''
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }
  handleChange = (e) => {
      e.target.key === "Enter" ? this.props.modifyFriend() : null
      console.log(e.target.name);
      this.setState({ [e.target.name]: e.target.value });
  }
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
          <Fade onChange={this.handleChange} in={this.state.fadeIn} className="mt-3">
            <InputGroup>
              <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
              <Input name="name" placeholder="name" value={this.state.name} />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
              <Input name="age" placeholder="age" value={this.state.age} />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
              <Input name="email" placeholder="email" value={this.state.email} />
            </InputGroup>
          </Fade>
        </Card>
      </div>
    );
  }
}

export default connect(null, { modifyFriend })(FriendCard);
