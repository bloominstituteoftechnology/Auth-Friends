import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button, Container, Form, FormGroup, Col, Input } from "reactstrap";

export default function FriendFrom() {
  const [newFriend, SetNewFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });

  const handleChange = event => {
    SetNewFriend({ ...newFriend, [event.target.name]: event.target.value });
  };

  const friendSubmit = () => {
    axiosWithAuth()
      .post("friends", newFriend)
      .then(res => {
        console.log(res);
      });
  };

  return (
    <Container className="App">
      <Form onSubmit={friendSubmit}>
        <Col>
          <FormGroup>
            <Input
              type="text"
              name="name"
              value={newFriend.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <Input
              type="text"
              name="age"
              value={newFriend.age}
              onChange={handleChange}
              placeholder="Age"
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <Input
              type="email"
              name="email"
              value={newFriend.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </FormGroup>
        </Col>

        <Button color="primary" type="submit">
          Add Friend
        </Button>
      </Form>
    </Container>
  );
}