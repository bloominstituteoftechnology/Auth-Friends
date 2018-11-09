import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../Actions';
import Friend from './Friend';

class FriendList extends Component {

    componentDidMount() {
        this.props.fetch();
    }

    render() {
        if (this.props.fetchingFriends) {
            return <div className='loading'>Loading Friends...</div>
        }
        return (
            <div className='friend-list'>Friend list
                {this.props.friends.map(friend => {
                    return(
                        <Friend key={friend.id} friend={friend}/>
                    )
                })}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        fetchingFriends: state.fetchingFriends
    }
}

export default connect(mapStateToProps, { fetch })(FriendList);