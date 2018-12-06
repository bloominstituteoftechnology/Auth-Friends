import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FriendCardDiv = styled.div`
    border: 1px solid gray;
    border-radius: 4px;
    width: 300px;
    margin: 1rem 2rem;
    padding: 1rem;
`

const FriendCardButton = styled.button`
    margin: 1rem;
    padding: .5rem;
    width: 100px;
    background-color: #666;
    color: #FFF;
    border: none;
    border-radius: 4px;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`

export default class FriendCard extends Component {

    editFriend = e => {
        e.preventDefault();
        this.props.editFriend();
    }

    render() {
        return (
            <FriendCardDiv>
                <p>name: {this.props.friend.name}</p>
                <p>age: {this.props.friend.age}</p>
                <p>email: {this.props.friend.email}</p>
                <Link to={`/${this.props.friend.id}`}>
                    <FriendCardButton>edit</FriendCardButton>
                </Link>
                <FriendCardButton onClick={() => this.props.deleteFriend(this.props.friend.id)}>delete</FriendCardButton>
            </FriendCardDiv>
        );
    }
}