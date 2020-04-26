import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import SearchCard from "../components/SearchCard";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
`;

const FriendsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  img {
    height: 200px;
    width: 200px;
    margin-bottom: 20px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  align-items: center;
`;

const Home = props => {
  const [friends, setFriends] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/me")
      .then(res => {
        props.setUser(res.data.username);
      })
      .catch(err => {
        console.log(err);
      });

    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

    const handleSearch = (searchTerm) => {
        const params = searchTerm ? searchTerm : "none"
        axiosWithAuth()
        .get(`http://localhost:5000/api/users/${params}`, )
        .then(res => {
          console.log(res)
          setUsers(res.data)
        })
        .catch(err => console.log(err))
    }

  return (
    <Container>
      <ProfileContainer>
        <h2>{props.user}</h2>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
        <FriendsContainer>
          {friends &&
            friends.map(friend => <Card key={friend.id} {...friend} />)}
        </FriendsContainer>
      </ProfileContainer>
      <SearchContainer>
        <SearchBar handleSearch={handleSearch} />
        <div>
            {users && users.map((user) => <SearchCard setFriends={setFriends} key={user.id} {...user}/>)}
        </div>
      </SearchContainer>
    </Container>
  );
};

export default Home;
