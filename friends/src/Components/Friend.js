import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const WrapperDiv = styled.div`
    display:flex;
    flex-direction:column;
`
const FriendWrapper = styled.div`
    display:flex;
`

const Header = styled.p`
    font-size:2.3rem;
    font-weight:bold;
`
const FriendText = styled.p`
    font-size:2rem;
`

const Friend = (props) =>{
    return(

        <WrapperDiv>
            <FriendWrapper><Header>Id:</Header><FriendText>{props.data.id}</FriendText></FriendWrapper>
            <FriendWrapper><Header>Name:</Header><FriendText>{props.data.name}</FriendText></FriendWrapper>
            <FriendWrapper><Header>Age:</Header><FriendText>{props.data.age}</FriendText></FriendWrapper>
            <FriendWrapper><Header>Email:</Header><FriendText>{props.data.email}</FriendText></FriendWrapper>
            <br/>
            <br/>
            <button onClick={(event)=>{props.handleDeleteFriend(event,props.data.id)}}>Delete</button>
            <Link to={`/friends/edit/${props.data.id}`}>Edit</Link>

        </WrapperDiv>

    )
}
export default Friend