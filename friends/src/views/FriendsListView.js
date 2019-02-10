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
                
                { this.props.loading && <Alert variant="primary">Loading friends</Alert> }
                { this.props.adding && <Alert variant="info">Adding your friend</Alert>}
                { this.props.added && <Alert variant="success">Friend added</Alert>}
                { this.props.deleting && <Alert variant="warning">Deleting your friend</Alert>}
                { this.props.deleted && <Alert variant="danger">Friend Deleted</Alert>}
                { this.props.editing && <Alert variant="light">Editing your friend</Alert>}
                { this.props.edited && <Alert variant="success">Friend edited</Alert>}

                { this.props.addForm ?
                
                    <div className="container">
                        <FriendForm />
                        <FriendsList friends={this.props.friends} />
                    </div> 
                    
                    :
                    <div className="container">
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