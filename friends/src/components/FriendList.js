import React from 'react';
import { fetchingFriends } from '../actions';
import Friend from './Friend';
import { connect } from 'react-redux';

class FriendList extends React.Component {

    componentDidMount() {
        this.props.fetchingFriends();
    }

    render() {
        return (
            <div>
                { this.props.fetching ? <h2>Fetching Data. Please Wait</h2> : null }
                { this.props.error !== '' ? <h2>{this.props.error}</h2> : '' }
                { this.props.friends.map( friend => 
                    <Friend friend={friend} key={friend.id} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        fetching: state.fetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, {fetchingFriends})(FriendList);