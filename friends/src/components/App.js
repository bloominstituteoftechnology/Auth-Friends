import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/App.css'
import { fetchFriends } from '../actions/index'
import { deleteFriend } from '../actions/index'

class App extends Component {
    componentDidMount = () => {
        this.props.fetchFriends()
    }

    render() {
        return (
            <div className="App">
                {this.props.fetchingFriends ? (
                    <p>Getting Friends...</p>
                ) : (
                    <ul>
                        {this.props.friends.map(friend => {
                            return (
                                <div className="list" id={friend.id}>
                                    <li key={friend.name}> {friend.name} </li>
                                    <li key={friend.age}> {friend.age} </li>
                                    <li key={friend.email}> {friend.email} </li>
                                    <li key={friend.id}>
                                        <button
                                            onClick={() => {
                                                this.props.deleteFriend(friend.id)
                                                window.location.reload()
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                )}

                {this.props.error !== '' ? <h4>{this.props.error}</h4> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends,
        error: state.friendsReducer.error,
        fetchingFriends: state.friendsReducer.fetchingFriends,
        createFriend: state.addFriendReducer.createFriend,
    }
}

export default connect(
    mapStateToProps,
    { fetchFriends, deleteFriend }
)(App)
