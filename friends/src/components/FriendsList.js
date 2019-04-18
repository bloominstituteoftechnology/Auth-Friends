import React from 'react';
import { connect } from 'react-redux';
import { handleGetFriends } from '../actions/index';
import Friend from './Friend';

class FriendsList extends React.Component {
    componentDidMount = () => {
        this.props.handleGetFriends(this.props.token);
    };

    render() {
        return (
            <div>
                {this.props.friends.length > 0  ? this.props.friends.map( friend => <Friend key={friend.id} data={friend} />): null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendReducer.friends,
        token: state.loginReducer.token
    }
}

export default connect(mapStateToProps, { handleGetFriends })(FriendsList);
