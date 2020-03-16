import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Friend from "./Friend";
function FriendsList() {
  const [friendsList, setFriendsList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => setFriendsList(res.data))
      .then(() => setIsFetching(false))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      {isFetching ? (
        <Spinner animation="border" role="status" variant="primary">
          <span className="sr-only">Fetching</span>
        </Spinner>
      ) : (
        <Container>
          <Row className="justify-content-center">
            {friendsList.map(friend => (
              <Friend friend={friend} />
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default FriendsList;
