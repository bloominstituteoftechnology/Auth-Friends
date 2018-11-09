import React from 'react';
import { connect } from 'react-redux';

import { deleteFriend } from '../actions/actions.js';

const Friend = props => {
    const clickHandler = e => {
        e.preventDefault();
        props.deleteFriend(props.friend.id);
    }

    return (
        <div>
            <span>{props.friend.name} </span>
            <button onClick={clickHandler}>Bye, friend!</button>
        </div>
    )
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {deleteFriend})(Friend);