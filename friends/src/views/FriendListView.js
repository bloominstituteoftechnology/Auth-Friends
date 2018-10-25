import React from "react";
import { connect } from "react-redux";
import { fetchFriends, addFriend, deleteFriend } from "../actions";
import { Friends, CreateFriendForm, UpdateFriendForm, DeleteFriendForm} from "../components";

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
                <CreateFriendForm addFriend={this.props.addFriend} />
                {/* <UpdateFriendForm /> */}
                <DeleteFriendForm deleteFriend={this.props.deleteFriend}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends.friends,
        fetchingFriends: state.friends.fetchingFriends,
        savingFriends: state.friends.savingFriends,
    }
}

export default connect(
    mapStateToProps,
    { fetchFriends, addFriend, deleteFriend }
)(FriendListView);