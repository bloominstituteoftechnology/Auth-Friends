import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import Friend from './friend';
import './friend.css'

class  FriendList extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.fetchFriends();
    }




    render() {
    
        return (
            <div>
                <div className="input-container">
                    <input placeholder="Name"></input>
                    <input placeholder="Age"></input>
                    <input placeholder="Email"></input>
                    <button>Submit</button>
                </div>
                <div className="flex-container">
                    {this.props.friends.map(friend => {
                        return <Friend name={friend.name} email={friend.email} age={friend.age}/>
                    })}
                </div>
            </div>
        )
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
        fetchFriends
    }
)(FriendList)

