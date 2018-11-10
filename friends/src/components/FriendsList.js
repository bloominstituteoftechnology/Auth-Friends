import React from 'react';
import { connect } from 'react-redux'


class FriendsList extends React.Component {
    render() {
        return (
            <h1>{this.props.blah}</h1>
        )
    }
}

let mapStateToProps = state => {
    return {
        blah: state.blah
    }
}

export default connect(mapStateToProps)(FriendsList);