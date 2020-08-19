import React, { useEffect } from 'react';
import { fetchFriends } from '../actions'
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';

const FriendsSheet = (props) => {

    useEffect(() => {
        props.fetchFriends();
        console.log(props.friends)
    }, []);


    return (
        <div>
            <Link to='/addfriend'>Add Friend</Link>
            {
                props.friends.map(friend=>
                    <p>{friend.name}</p>
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
        isLoading: state.isLoading,
    }
}


export default connect(mapStateToProps, {fetchFriends})(FriendsSheet)