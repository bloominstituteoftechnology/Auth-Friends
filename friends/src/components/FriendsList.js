import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getFriends } from '../actions/actions.js'

class FriendsList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.getFriends()
    }

    render(){
        return (
            <div>
                {this.props.fetchingFriends ? <h1>Loading friends...</h1> : null}
                {this.props.error !== '' ? <h1>{this.props.error}</h1> : null }
                {this.props.friends.map(friend => <Friend friend={friend} key={Math.random()}/>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        error: state.error,
        fetchingFriends: state.fetchingFriends
    }
}

export default connect(mapStateToProps, {getFriends})(FriendsList)