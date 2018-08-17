import React from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriends } from '../actions';

const Friends = () => {
    return (  
        <div>
            {this.props.friends.map(friend => {
                return (
                    <div>
                        <h3>{friend.name}</h3>
                        <h4>{friend.age}</h4>
                        <h4>{friend.email}</h4>
                    </div>                    
                )
            })}
        </div>
    );
}
 
const mapStateToProps = state => {
    const {friends, fetchingFriends, friendsFetched, error }= state
    return {
        friends: friends,
        fetchingFriends: fetchingFriends,
        friendsFetched: friendsFetched,
        error: error
    };
};

export default connect(mapStateToProps, { getFriends, addFriends })(Friends);