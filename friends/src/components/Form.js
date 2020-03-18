import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendForm = ({
  showModal,
  handleCloseModal,
  updateFriends,
  isEditing,
  friend,
  handleChange
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    isEditing
      ? axiosWithAuth()
          .put(`http://localhost:5000/api/friends/${friend.id}`, friend)
          .then(res => {
            console.log(res.data);
            updateFriends(res.data);
            setIsLoading(false);
            handleCloseModal();
          })
          .catch(err => {
            setIsLoading(false);
            console.log(err);
          })
      : axiosWithAuth()
          .post("http://localhost:5000/api/friends", friend)
          .then(res => {
            console.log(res.data);
            updateFriends(res.data);
            setIsLoading(false);
            handleCloseModal();
          })
          .catch(err => {
            setIsLoading(false);
            console.log(err);
          });
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isEditing ? "Update Friend" : "Add New Friend"}
        </Modal.Title>
      </Modal.Header>

      <Form
        onSubmit={event => {
          event.preventDefault();
          console.log("test");
          handleSubmit();
        }}
      >
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              as="input"
              placeholder="Enter Name"
              value={friend.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              as="input"
              placeholder="Enter Age"
              value={friend.age}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              as="input"
              placeholder="Enter Email"
              value={friend.email}
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={event => {
              event.preventDefault();
              handleCloseModal();
            }}
          >
            Close
          </Button>
          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? (
              <Spinner animation="border" role="status" variant="primary" />
            ) : isEditing ? (
              "Update"
            ) : (
              "Add Friend"
            )}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default FriendForm;
