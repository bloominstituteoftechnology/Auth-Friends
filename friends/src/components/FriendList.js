import React from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';
import { getFriends } from '../actions';


class FriendsList extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <div className="friend-list">
                {this.props.friends.map( friend => {
                    return <Friend friend={friend} key={friend.id} />
                })}
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        friends: state.friends,
        error: state.error,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { getFriends })(FriendsList);