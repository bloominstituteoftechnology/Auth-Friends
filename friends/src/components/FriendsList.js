import React, { useState, useEffect } from 'react';
import FriendsCard from './FriendsCard';
import styled from 'styled-components';
import { axiosWithAuth }from '../utils/axiosWithAuth';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
width: 90%;

margin: 0 auto;
`

const Body = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
border-top: #282c34 solid 2px;
`

const FriendsList = (props) => {

    const [friends, setFriends] = useState([]);
    useEffect(() => {  
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log('success', res);
            setFriends(res.data)
        })
        .catch(err => console.log(err)); 
    }, []);

return(
    <Container>
    <h2>Friends!</h2>
    <Body>
    {friends.map(item  =>
        <FriendsCard 
        className="friend-card"
        key={item.id} 
        name={item.name}
        age={item.age}
        email={item.email} />
    )}
    </Body>
    </Container>
)
}

export default FriendsList