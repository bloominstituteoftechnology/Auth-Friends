import React from 'react';
import Friend from './Friend';
import { connect } from 'react-redux';
import { deleteFriend, setName } from '../actions';

const Friends = props => {
    const friends = props.friends.slice().reverse();

    return (
        <div className='friends-container'>
            {friends.map(friend => <Friend key={friend.id} friend={friend} deleteFriend={props.deleteFriend} setName={props.setName} />)}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        friendName: state.friendsReducer.friendName
    }
}

export default connect(mapStateToProps, { deleteFriend, setName })(Friends);