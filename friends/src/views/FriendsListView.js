import React from 'react';
import { connect } from 'react-redux';
import { FriendsList, FriendForm} from '../components';
import { fetchFriends, fetchAFriend } from '../actions';

class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.fetchFriends();
    }
    
    // fetchAFriend() {
    //     this.props.fetchAFriend(this.props.id);
    // }

    render() {
        return(
            <div className="friendslist-wrapper">
                <FriendForm />
                { this.props.friends.length === 0 ?
                    <div>Loading... </div>
                    
                    :
                    <FriendsList friends={this.props.friends} />
                }
            </div>
        )
    }
}

const mapStateToProps = ({ friendsReducer: state }) => {
    return {
      friends: state.friends,
      loading: state.loading,
      error: state.error
    };
  };

export default connect(
    mapStateToProps,
    {
        fetchFriends
    }
)(FriendsListView);