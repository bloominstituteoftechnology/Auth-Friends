import { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components'

import FriendCard from './FriendCard';

const FlexDiv = styled.div`
    display: flex; 
    flex-flow: row wrap;
    justify-content: space-between; 
    align-items: center;
`;

const FriendsDash = () => {

    const [friends, setFriends] = useState([])

    const getFriends = () => {
        axiosWithAuth().get('/api/friends')
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => console.log(err))
    };



    useEffect(() => {
        getFriends();
    }, [])

    return(
        <FlexDiv>
            {friends.map((friend) => {
                return <FriendCard key={friend.id} friend={friend} />
            })}
        </FlexDiv>
    )
}



export default FriendsDash