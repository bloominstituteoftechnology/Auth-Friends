import React from 'react';
import styled from 'styled-components';
import Friend from './Friend';

const List = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default props => (
    <List>
        {props.friends.map(x => <Friend key={x.id} data={x} deleteFriend={props.deleteFriend} updateFriend={props.updateFriend} />)}
    </List>
);