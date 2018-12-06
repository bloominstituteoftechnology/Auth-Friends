import React from 'react';
import FriendCard from './FriendCard';
import styled from 'styled-components';

const FriendsListDiv = styled.div`
    margin-top: 165px;
`

export default function FriendsList(props) {
    return (
        <FriendsListDiv>
            {(props.fetchingFriends === true) ? 
                (<p>Loading Friends...</p>) : 
                (null)
            }
            {props.friends.map(friend =>
                <FriendCard
                    key={friend.id}
                    friend={friend} 
                    deleteFriend={props.deleteFriend}
                />
            )}
        </FriendsListDiv>
    );
}