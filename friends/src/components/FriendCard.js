import React from 'react';
import {connect} from 'react-redux';

import {deleteFriend} from '../actions/actions';

const FriendCard = (props)=>{

    const handleClick = (event)=>{
        event.preventDefault();
        props.deleteFriend(props.friend);
    }

    return(
        <li>
            <h2>Name: {props.friend.name}</h2>
            <h3>Age: {props.friend.age}</h3>
            <p>Email: {props.friend.email}</p>
            <div onClick={handleClick}>X</div>
        </li>
    )
}

const mapStateToProps = (state)=>{
    return {}
}

export default connect(mapStateToProps, {deleteFriend})(FriendCard);