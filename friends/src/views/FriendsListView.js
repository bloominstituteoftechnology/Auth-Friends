import React from 'react';
import { connect } from 'react-redux';
import { FriendsList, FriendForm, EditForm} from '../components';
import { fetchFriends, addFriend, editForm } from '../actions';

class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.fetchFriends();
    }
    
    render() {
        console.log(this.props);
        return(
            <div className="friendslist-wrapper">
                
                { this.props.loading && <p>Loading friends</p> }
                { this.props.adding && <p>Adding your friend</p>}
                { this.props.added && <p>Friend added</p>}
                { this.props.deleted && <p>Deleting your friend</p>}
                { this.props.deleting && <p>Freind Deleted</p>}
                { this.props.editing && <p>Editing your friend</p>}
                { this.props.edited && <p>Friend edited</p>}

                { this.props.addForm ?
                
                    <div>
                        <FriendForm />
                        <FriendsList friends={this.props.friends} />
                    </div> 
                    
                    :
                    <div>
                        <EditForm friend={this.props.friend} id={this.props.editId} />
                    </div>    
                }
         
                    
            </div>
        )
    }
}

const mapStateToProps = ({ friendsReducer: state }) => {
    return {
        friends: state.friends,
        loading: state.loading,
        error: state.error,
        adding: state.adding,
        added: state.added,
        deleting: state.deleting,
        deleted: state.deleted,
        editing: state.editing,
        edited: state.edited,
        editForm: state.editForm,
        addForm: state.addForm,
        friend: state.friend
    };
  };

export default connect(
    mapStateToProps,
    {
        fetchFriends,
        addFriend,
        editForm
    }
)(FriendsListView);