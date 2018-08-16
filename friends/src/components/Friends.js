import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../store/actions'

class Friends extends Component {
    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        return(
            <div>
                <h1>My very best friends!</h1>
                <ul>
                    {this.props.friends.map(friend => <li key={friend.name}>{friend.name}, age {friend.age}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friendsReducer.friends,
        fetching: state.friendsReducer.fetchingFriends
    }
}

export default connect(mapStateToProps, { fetchFriends })(Friends);