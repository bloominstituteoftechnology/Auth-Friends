import React from 'react';
import { connect } from 'react-redux';
import { FriendsList, FriendForm, EditForm} from '../components';
import { fetchFriends, addFriend, editForm } from '../actions';
import { Alert } from 'react-bootstrap';

class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.fetchFriends();
    }
    
    render() {
        return(
            <div className="friendslist-wrapper">
                
                { this.props.loading && <Alert variant="primary"><p>Loading friends</p></Alert> }
                { this.props.adding && <p>Adding your friend</p>}
                { this.props.added && <Alert dismissible variant="success"><p>Friend added</p></Alert>}
                { this.props.deleted && <p>Deleting your friend</p>}
                { this.props.deleting && <Alert dismissible variant="success"><p>Freind Deleted</p></Alert>}
                { this.props.editing && <p>Editing your friend</p>}
                { this.props.edited && <Alert dismissible variant="success"><p>Friend edited</p></Alert>}

                { this.props.addForm ?
                
                    <div>
                        {/* <Button variant="primary"></Button> */}
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