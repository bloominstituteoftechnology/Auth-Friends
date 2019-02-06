import React from 'react';
import { connect } from 'react-redux';
import { FriendsList } from '../components';
import { fetchFriends } from '../actions';

class FriendsListView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        return(
            <div className="friendslist-wrapper">
                <FriendsList friends={this.props.friends} />
            </div>
        )
    }
}

const mapStateToProps = ({ friendsReducer: state }) => {
    return {
      friends: state.friends,
      loading: state.isFetching,
      error: state.error
    };
  };

export default connect(
    mapStateToProps,
    {
        fetchFriends
    }
)(FriendsListView);