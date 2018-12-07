import React, { Component } from "react";
import { connect } from "react-redux";

class FriendsListView extends Component {
    render(){
        return <h1>Friends List View</h1>
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        fetching: state.fetchingFriends,
        error: state.error
    }
}



export default connect(
    mapStateToProps
)(FriendsListView)
