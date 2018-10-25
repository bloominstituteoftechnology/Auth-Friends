import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import Friend from './friend';

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
                {this.props.friends.map(friend => {
                    return <Friend name={friend.name} age={friend.age}/>
                })}
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

