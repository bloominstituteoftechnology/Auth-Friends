import React from 'react';
import styled from 'styled-components';

const FriendNode = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.3rem;
    border: 1px solid #222;
    margin-bottom: 50px;
    padding: 15px;

    .delete-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;

        &:active {
            transform: translateY(1px);
        }
    }
`;

export default props => (
    <FriendNode>
        <span>{props.data.name}</span>
        <span>{props.data.age}</span>
        <span>{props.data.email}</span>
        <span className="fas fa-user-minus delete-btn" onClick={() => props.deleteFriend(props.data.id)}></span>
    </FriendNode>
);