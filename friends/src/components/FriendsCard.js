import React from 'react';
import styled from 'styled-components';

const CardBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
border: solid #282c34 2px;
min-width: 300px;
max-width: 300px;
margin: 5%;
background-color: white;
`
const CardHeader = styled.h3`
background-color: #282c34;
color: white;
margin: 0;
padding: 2% 0; 
`

const FriendCard = props => {

    return ( 
        <CardBody className="card-container">        
        <CardHeader>{props.name}</CardHeader>
        <p>Age: {props.age}</p>
        <p>E-mail: {props.email}</p>

        {/* 
        <button>Delete</button>
        <button>Edit</button> 
        */}

        </CardBody>
    );
};

export default FriendCard;

