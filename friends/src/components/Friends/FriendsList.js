import React from 'react';
import {connect} from 'react-redux';

import {fetchFriends} from '../../actions/index';
import FriendCard from './FriendCard';
import EditFriend from '../Forms/EditFriend';

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        if (this.props.fetching) {

        }
        return (
            <div>
                <EditFriend type='Add Friend'/>
                {this.props.friends.map((friend) => {
                    return <FriendCard key={friend.id} friend={friend} />
                })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        friends: state.friends,
        fetching: state.fetching,
    });
}

export default connect(mapStateToProps, {fetchFriends})(FriendsList);