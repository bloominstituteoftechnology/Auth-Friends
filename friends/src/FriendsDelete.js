import React from "react";

class FriendsDelete extends React.Component {
    state = {
        id: '',
        name: '',
        age: '',
        email: ''
    };


    render() {
        return (
            <button onClick={() => this.handleFriendDelete()} type="button">
                Delete a Frenemy!!! 😈
            </button>
        )
    }
}

export default FriendsDelete;