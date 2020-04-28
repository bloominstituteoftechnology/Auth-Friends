import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';
import { fetchFriend } from '../actions';

const FriendsList = (props) => {
    useEffect(() => {
        props.fetchFriend()
    },[]);

    if (props.isFetching) {
        return <h2>Loading Friends...</h2>

    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.Friends.map((friend)=> (
                <Friend key={friend.id} friend={friend}/>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Friends: state.Friends,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(mapStateToProps,{fetchFriend})(FriendsList)