import React from "react";
import { connect } from "react-redux";
import { fetchFriends } from "../actions";
import { Friends, CreateFriendForm, UpdateFriendForm } from "../components";

class FriendListView extends React.Component {
    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        if (this.props.fetchingFriends) {
            return <h1>Be patient, your friends are on the way...</h1>
        }
        return (
            <div>
                <Friends friends={this.props.friends} />
                {/* <CreateFriendForm />
                <UpdateFriendForm /> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends.friends,
        fetchingFriends: state.friends.fetchingFriends,
    }
}

export default connect(
    mapStateToProps,
    { fetchFriends }
)(FriendListView);