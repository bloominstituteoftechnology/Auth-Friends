import React from 'react'
import { createFriend } from '../actions/index'
import { connect } from 'react-redux'

class CreateFriendForm extends React.Component {
    render() {
        return (
            <div>
                {this.props.fetchingFriends ? (
                    <h4>Getting Friends...</h4>
                ) : (
                    <form action="" method="post">
                        <label htmlFor="POST-name">Name:</label>
                        <input id="POST-name" type="text" name="name" />
                        <input type="submit" value="submit" />
                    </form>
                )}
                {this.props.error !== '' ? <h4>{this.props.error}</h4> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.addFriendReducer.friends,
        error: state.addFriendReducer.error,
        friendsSaved: state.addFriendReducer.friendsSaved,
        savingFriends: state.addFriendReducer.savingFriends,
        fetchingFriends: state.addFriendReducer.fetchingFriends,
        friendsFetched: state.addFriendReducer.friendsFetched,
    }
}

export default connect(
    mapStateToProps,
    { createFriend }
)(CreateFriendForm)
