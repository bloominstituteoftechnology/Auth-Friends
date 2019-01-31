import React, { Component } from 'react';
import FriendsList from '../components/FriendList/FriendList';
import { connect } from 'react-redux';
import { getFriends } from '../store/actions'

class FriendView extends Component {

    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        console.log(this.props)
        return(
            <div>
                {this.props.friends && (<FriendsList {...this.props} friends={this.props.friends} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        friends: state.friends.data,
    }
}
export default connect(mapStateToProps, { getFriends })(FriendView);