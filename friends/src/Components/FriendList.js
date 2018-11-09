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

        if (this.props.fetchingFriends) {
            return (
                <h2>Let's see how many friends you have</h2>
            )
        }

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