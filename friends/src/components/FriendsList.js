import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Form from './Form';

import styled from 'styled-components';

const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledCards = styled.div`
  border: black 3px solid;
  border-radius: 10px;
  margin: 2%;
  padding: 1%;
  width: 10rem;
  img{
    width: 100%;
  }
  .githubImg{
    width: 2rem;
  }
`

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(response => {
                setFriends(response.data);
            })
            .catch(error => console.error(error));
    },[]);

    return (
        <div>
            <Form setFriends={setFriends} />
            <StyledList>
                {friends.map(friend => (
                    <StyledCards key={friend.id}>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </StyledCards>
                ))}
            </StyledList>

        </div>
    );
};

export default FriendsList;