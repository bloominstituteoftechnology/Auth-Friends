import React from "react";
import styled from "styled-components";

const Container = styled.div`
    div {
        height: 75px;
        width: 75px;
        background: #CCCCCC;
        border-radius: 10px;
        margin: 0 2px;
    }
    p {
        font-size: 10px;
        text-align:center;
    }
`


const Card = ({ pushToFriend, setFriend, friend }) => {
    const { name, id } = friend
    const handleOnClick = () => {
        setFriend(friend)
        pushToFriend(id)
    }
    return (
        <Container onClick={() => handleOnClick()}>
            <div></div>
            <p>{name.split(" ")[0]}</p>
        </Container>
    )
}

export default Card;