import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getFriends } from '../actions/friendsActions';
import Friend from './Friend';

class FriendList extends Component {
    componentDidMount() {
        this.props.getFriends()
    }
    render() {
        return (
            <div>
                <h1>My Friends</h1>
                { this.props.loading ? <h1>Loading</h1> : null },
                { this.props.error !== '' ? <h1>{this.props.error}</h1> : null }
                { this.props.friends.map( friend => <Friend friend={friend} key={friend.id}/> ) }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    error: state.error,
    loading: state.loading
});

export default connect(mapStateToProps, { getFriends })(FriendList);