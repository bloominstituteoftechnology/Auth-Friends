import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendCard from "./Friend";
import FriendForm from "./Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // credentials of the new friends
  const [friend, setFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleCloseModal = () => {
    setShowModal(false);
    setIsEditing(false);
    setFriend({
      name: "",
      age: "",
      email: ""
    });
  };

  const handleShowModal = () => setShowModal(true);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriendsList(res.data);
        setIsLoading(false);
      }).then(() =>  setIsLoading(false))
      .catch(err => {
        setIsLoading(false);
      });
  }, []);

  const handleChange = event => {
    setFriend({ ...friend, [event.target.name]: event.target.value });
  };

  const updateFriends = friendsData => {
    setFriendsList(friendsData);
  };

  const toggleEditing = friend => {
    setIsEditing(true);
    setFriend(friend);
  };

  return (
    <div>
      <Button onClick={handleShowModal} className="add-friend">
        Add Friend
      </Button>
      <FriendForm
        showModal={showModal}
        friend={friend}
        handleChange={handleChange}
        isEditing={isEditing}
        handleCloseModal={handleCloseModal}
        updateFriends={updateFriends}
      />
      {isLoading ? (
        <Spinner animation="border" role="status" variant="primary">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <Container>
          <Row className="justify-content-center">
            {friendsList.map(friend => (
              <FriendCard
                handleShowModal={handleShowModal}
                toggleEditing={toggleEditing}
                friend={friend}
                key={friend.id}
                updateFriends={updateFriends}
              />
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default FriendsList;
