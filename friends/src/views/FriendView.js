import React, { Component } from 'react';
import FriendsList from '../components/FriendList';
import { connect } from 'react-redux';
import { getFriends } from '../store/actions'

class FriendView extends Component {

    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        return(
            <FriendsList friends={this.props.friends} />
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}
export default connect(mapStateToProps, { getFriends })(FriendView);