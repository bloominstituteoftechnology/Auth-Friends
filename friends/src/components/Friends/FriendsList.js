import React from 'react';
import {connect} from 'react-redux';

import FriendCard from './FriendCard';

const FriendsList = props => {
    return (
        <div>
            {/*props.friends.map((friend) => {
                return <FriendCard friend={friend} />
            })
            */}
        </div>
    );
}

const mapStateToProps = state => {
    return ({
        friends: state.friends,
    });
}

export default connect(mapStateToProps)(FriendsList);