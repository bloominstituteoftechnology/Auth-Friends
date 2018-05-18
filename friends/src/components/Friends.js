import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';

class Friends extends Component {

    componentDidMount() {
        this.props.fetchFriends(); // <-this gets the friends from off the server in the actions index
    }

    render() {
        console.log("this.props:", this.props)
        return (
            <div>
                {this.props.friends.map(friend => {
                    return (
                        <div key={friend.id}> 
                            <li>{friend.name}</li>
                            <li>{friend.age}</li>
                            <li>{friend.email}</li>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("MapStateToProps State:", state);
    return {
        friends: state.friends,
        fetchingFriends: state.fetchingFriends
    }
}

export default connect(mapStateToProps, { fetchFriends })(Friends);