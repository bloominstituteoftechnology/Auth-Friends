import React from "react";
import Card from "react-bootstrap/Card";

function Friend({ friend }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{friend.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {friend.age}
          </Card.Subtitle>
          <Card.Text>{friend.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Friend