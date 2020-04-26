import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

import PrivateRoute from "../utils/PrivateRoute";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import SearchCard from "../components/SearchCard";
import UserCard from "../components/UserCard";

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

  input {
      background: #282c34;
      color: white;
      font-size: 22px;
      margin: 20px 0;
      border: none;
      text-align: center;
      font-weight: 700;
      font-family: 'Lexend Giga';
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
  const [name, setName] = useState();
  const [friend, setFriend] = useState("" && friends.find(friend => friend.id === props.match.params.friendId))

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
            props.history.push("/home/search")
          console.log(res)
          setUsers(res.data)
        })
        .catch(err => console.log(err))
    }

    const handleSetName = (e) => {
        if (e.key === "Enter") {
            axiosWithAuth()
            .put(`http://localhost:5000/api/me`, { username: name } )
            .then(res => {
                console.log(res)
                setName(undefined)
                props.setUser(res.data.username)
            })
            .catch(err => console.log(err))
        } else if (e.key === "Escape") {
            setName(undefined)
        }
    }

  return (
    <Container>
      <ProfileContainer>
        {!name ? <h2 onClick={e => setName(props.user)}>{props.user}</h2> : <input type='text' onChange={e => setName(e.target.value)} value={name} onKeyDown={e => handleSetName(e)} /> }
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
        <FriendsContainer>
          {friends &&
            friends.map(friend => <Card key={friend.id} friend={friend} setFriend={setFriend} pushToFriend={(id) => props.history.push(`/home/profile/${id}`)} />)}
        </FriendsContainer>
      </ProfileContainer>
      <SearchContainer>
        <SearchBar handleSearch={handleSearch} />
        <div>
            <PrivateRoute exact path="/home/search" component={() => (users && users.map((user) => <SearchCard setFriends={setFriends} key={user.id} {...user}/>))} />
            <PrivateRoute path="/home/profile/:friendId" component={(props) => <UserCard {...props} friend={friend} setFriends={setFriends} />} />
        </div>
      </SearchContainer>
    </Container>
  );
};

export default Home;
