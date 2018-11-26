import React from 'react';
import { connect } from 'react-redux';

import { deleteFriend } from '../actions/actions.js';
import UpdateFriend from './UpdateFriend.js'

const Friend = props => {
    const clickHandler = e => {
        e.preventDefault();
        props.deleteFriend(props.friend.id);
    }

    return (
        <div>
            <p>{props.friend.name} is {props.friend.age} years old and can be reached at {props.friend.email}.</p>
            <UpdateFriend friend={props.friend}/>
            <button onClick={clickHandler}>Bye, friend!</button>
        </div>
    )
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {deleteFriend})(Friend);