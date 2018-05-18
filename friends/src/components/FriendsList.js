import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';


class FriendsList extends Component {

    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        return (
            <div>
                {this.props.error ? <div>404 Oh Snap</div> : null}
                {this.props.fetchingFriends ? <div>Loading...</div> : null}
                <ul>
                    {this.props.friends.map(friend => {
                        return <li key={friend}> {friend.name} </li>;
                    })}
                </ul>
            </div>
        )
    }





}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        fetchingFriends: state.fetchingFriends,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchFriends })(FriendsList);