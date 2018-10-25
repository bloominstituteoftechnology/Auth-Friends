import React from "react";
import { connect } from "react-redux";

import { FriendsDisplay } from "../components";
import { fetchFriendsList } from "../actions";

class FriendsView extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchFriendsList();
    }

    render() {
        if (this.props.fetchingFriends) {
            return <h1>Loading ...</h1>;
        }
        return (
            <FriendsDisplay friends={this.props.friends} />
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

export default connect(
    mapStateToProps,
    {
        fetchFriendsList
    }
)(FriendsView);