import React from 'react';
import {connect} from 'react-redux';

import EditFriend from '../Forms/EditFriend';
import {deleteFriend} from '../../actions/index';

const FriendCard = props => {
    const callDelete = e => {
        e.preventDefault();
        props.deleteFriend(props.friend.id);
    }

    return (
        <div>
            <div>
                <button onClick={callDelete}>Delete Friend</button>
            </div>
            <p>
                <div>{props.friend.id}</div>
                <div>{props.friend.name}</div>
            </p>
            <p>
                <div>{props.friend.email}</div>
            </p>

            <EditFriend id={props.friend.id} type='Edit Friend'/>
        </div>
    )
}

const mapStateToProps = state => {
    return ({

    })
}

export default connect(mapStateToProps, {deleteFriend})(FriendCard);