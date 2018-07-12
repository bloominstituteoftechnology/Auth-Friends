import React, { Component } from 'react';
import Loading from './Loading'
import { connect } from 'react-redux'

class Friends extends Component {
    render() {
        return (
            <div>
                {this.props.fetchingFriends ? <Loading /> : this.props.friends.map(friend => {
                    return <div key={friend.id}>{`${friend.name} ${friend.age} ${friend.email}`}</div>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        friends: state.dataFetchReducer.friends,
        fetchingFriends: state.dataFetchReducer.fetchingFriends,
        friendsFetched: state.dataFetchReducer.friendsFetched,
        error: state.dataFetchReducer.error
    }
}

export default connect(mapStateToProps)(Friends);
