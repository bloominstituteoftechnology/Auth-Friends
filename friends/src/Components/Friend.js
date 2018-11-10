import React from 'react';
import { Link } from 'react-router-dom';
import panda from '../img/panda.png';
import { FriendImage, FriendLayout } from './StyledComponents.js';

const Friend = (props) => {
    console.log(props)
    return(
        <div>
        <FriendLayout>
            <FriendImage src={panda} alt='panda'/>
            <Link to = {`/${props.id}`}>
            <h1>{props.name}</h1>
            </Link>
        </FriendLayout>
        </div>
    )
}

export default Friend;