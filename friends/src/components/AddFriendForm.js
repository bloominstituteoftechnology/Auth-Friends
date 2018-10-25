import React from 'react'
import { createFriend } from '../actions/index'
import { connect } from 'react-redux'

class CreateFriendForm extends React.Component {
    state = {
        name: null,
    }
    handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.createFriend(this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="POST-name">Name:</label>
                <input
                    id="POST-name"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                />
                <input type="submit" value="submit" />
            </form>
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
