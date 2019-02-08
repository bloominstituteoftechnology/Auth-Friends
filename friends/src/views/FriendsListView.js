import React from 'react';
import { connect } from 'react-redux';
import { FriendsList, FriendForm} from '../components';
import { fetchFriends, addFriend, editFriend } from '../actions';

class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.fetchFriends();
    }
    
    // fetchAFriend(id) {
    //     this.props.fetchAFriend(id);
    // }

    render() {
        console.log(this.props);
        return(
            <div className="friendslist-wrapper">
                
                { this.props.adding && <p>Adding your friend</p>}
                { this.props.deleting && <p>Deleting your friend</p>}
                { this.props.loading && <p>Loading friends</p> }


                { this.props.isEditForm ?

                    <EditForm id={this.props.editId} />
                    :    
                    <FriendForm />
                }            
                    
                    <FriendsList friends={this.props.friends} />
            </div>
        )
    }
}

const mapStateToProps = ({ friendsReducer: state }) => {
    return {
        friends: state.friends,
        loading: state.loading,
        error: state.error,
        deleting: state.deleting,
        isEditForm: state.isEditForm
    };
  };

export default connect(
    mapStateToProps,
    {
        fetchFriends,
        addFriend,
        editFriend
    }
)(FriendsListView);