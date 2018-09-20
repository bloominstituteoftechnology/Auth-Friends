import React from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../store/actions';
import FriendsList from '../components/FriendsList/FriendsList';

class FriendListView extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <FriendsList {...this.props}/>
        );
    }
}

const mapStateToProps = state => ({
    friendsList: state.friends
});

export default connect(mapStateToProps, { getFriends })(FriendListView);