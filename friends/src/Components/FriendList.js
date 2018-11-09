import React, { Component } from 'react';
import Friend from './Friend';
import { connect } from 'react-redux';
import { loadFriends } from '../Actions/index';

class FriendList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.loadFriends()
    }

    render() {
        return (
            <>
                {this.props.friends.map(friend => {
                    return (
                        <Friend
                            friend={friend}
                        />
                    )
                })
                }
            </>
        )
    }
}

const mstp = state => {
    console.log(state)
    return {
        fetchingFriends: state.fetchingFriends,
        friends: state.friends
    }
}

export default connect(mstp, { loadFriends })(FriendList);