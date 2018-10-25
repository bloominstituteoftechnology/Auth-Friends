import React from 'react'
import { updateFriend } from '../actions/index'
import { connect } from 'react-redux'
import '../styles/App.css'

class UpdateFriendForm extends React.Component {
    state = {
        name: null,
        age: null,
        email: null,
        id: null
        
    }
    handleChange = e => {
        const target = e.target
        const name = target.name
        const value =
            target.name === 'age' ? parseInt(target.value) : target.value
        this.setState({
            [name]: value,
            id: e.target.id,
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.updateFriend(this.state.id, this.state)
    
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-break">
                    <div>
                        <label htmlFor="POST-name">Name: </label>
                        <input
                            className="inputs"
                            id="POST-name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label className="age" htmlFor="POST-age">
                            Age:
                        </label>
                        <input
                            className="inputs"
                            id="POST-age"
                            type="number"
                            min="0"
                            max="110"
                            name="age"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="POST-email">Email:</label>
                        <input
                            className="inputs"
                            id="POST-email"
                            type="text"
                            name="email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <input className="submit" type="submit" value="update" />
                </div>
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
        deletingFriends: state.deleteFriendReducer.deletingFriends,
        friendDeleted: state.deleteFriendReducer.friendDeleted,
        updatingFriends: state.updateFriendReducer.updatingFriends,
        friendUpdated: state.updateFriendReducer.friendUpdated,
        
    }
}

export default connect(
    mapStateToProps,
    { updateFriend }, 
)(UpdateFriendForm)
