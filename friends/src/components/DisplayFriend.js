import React from 'react';
import styled from 'styled-components';

const FrindContainer = styled.div`
    dipslay: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px auto;

    p{
        margin: 8px auto;
    }
`;

const DisplayFriend = (props)=>{
    return(
        <FrindContainer>
            <p>Name: {props.friend.name}</p>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </FrindContainer>
    )
}

export default DisplayFriend;