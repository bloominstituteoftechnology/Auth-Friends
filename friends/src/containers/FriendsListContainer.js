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
                <FriendsList 
                    friends={this.props.friends}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return(
        {friends: state.friends}
    )
}

export default connect(mapStateToProps, {getFriends})(FriendsListContainer);