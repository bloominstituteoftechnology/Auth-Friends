import React from "react";
import Card from "react-bootstrap/Card";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendCard = ({
  friend,
  updateFriends,
  handleShowModal,
  toggleEditing
}) => {
  const deleteFriend = () => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${friend.id}`)
      .then(res => {
        updateFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{friend.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {friend.age}
          </Card.Subtitle>
          <Card.Text>{friend.email}</Card.Text>
          <Card.Link
            onClick={event => {
              event.preventDefault();
              toggleEditing(friend);
              handleShowModal();
            }}
            href="#"
          >
            Edit
          </Card.Link>
          <Card.Link
            onClick={event => {
              event.preventDefault();
              deleteFriend();
            }}
            href="#"
          >
            Delete
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FriendCard;