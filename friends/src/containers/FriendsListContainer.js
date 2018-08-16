import React from 'react';
import { connect } from 'react-redux';
import FriendsList from '../components/FriendsList';
import { getFriends } from '../actions/actions';

class FriendsListContainer extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <FriendsList />
            </div>
        )
    }
}

const mapStateToProps = state = ({
    friends: state.friends
})

export default connect(mapStateToProps, {getFriends})(FriendsListContainer);