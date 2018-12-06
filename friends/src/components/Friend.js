import React from "react";
import styled from "styled-components";
import { deleteFriend } from "../store/actions/index";

const Card = styled.div`
  background: lightgray;
  border: 3px dashed gray;
  padding: 20px;
  box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.3);
  color: darkred;
  font-size: 16px;
  max-width: 500px;
  margin: 0 auto 10px;

  &:last-child {
    margin: 0 auto;
  }
`;

const Button = styled.button`
  background: none;
  color: darkred;
  font-weight: bold;
  text-transform: uppercase;
  border: 2px solid darkred;
  outline: none;
  position: relative;
  box-shadow: 0 4px darkred;
  cursor: pointer;
  padding: 3px 7px;

  &:hover {
    top: 2px;
    box-shadow: 0 2px darkred;
  }

  &:active {
    top: 4px;
    box-shadow: 0 0;
  }
`;

const H2 = styled.h2`
  position: relative;
`;

const Span = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  color: red;
  cursor: pointer;
`;

function Friend({ name, email, age, deleteFriend, id }) {
  return (
    <Card>
      <H2>
        Name: {name}
        <Span onClick={() => deleteFriend(id)}>X</Span>
      </H2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <Button>Edit&nbsp;Friend</Button>
    </Card>
  );
}

export default Friend;
