import React, {Component} from 'react';
import SelectedFriend from './SelectedFriend';
import {connect} from 'react-redux';
import {deleteFriend, selectFriend, toggleFriend} from '../actions';
import UpdateFriendForm from './UpdateFriendForm';

class Friends extends React.Component {
    handleDelete = ()=> {
        const {id} = this.props.friendSelected;
        this.props.deleteFriend(id);
    };

    handleSelectFriend = (friend)=> {
        this.props.selectFriend(friend);
    };

    handleToggleFriend = ()=> {
        this.props.toggleFriend();
    };

    render() {
        return(
            <div>
                <div>
                    <ul>
                        {this.props.friends.map(friend=> {
                            return (
                                <li onClick={()=> this.handleSelectFriend(friend)} key={friend.id}>
                                    {friend.name}
                                </li>
                            );
                        })}
                    </ul>
                    {Object.keys(this.props.selectFriend).length > 0 ? (
                        <SelectedFriend 
                            handleSelectFriend={this.handleSelectFriend}
                            handleToggleFriend={this.handleToggleFriend}
                            handleDelete={this.handleDelete}
                            select={this.props.selectFriend}
                        />
                    ) : null }
                    {this.props.update ? (
                        <UpdateFriendForm friend={this.props.selectFriend}/>
                    ) : null }
                    {this.props.deletingFriend ? (
                        <h2>Deleting Friend</h2>
                    ) : null }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state=> {
    return {
        deletingFriend: state.friendsReducer.deletingFriend,
        error: state.friendsReducer.error,
        update: state.friendReducer.update,
        selectFriend: state.friendReducer.selectFriend
    };
};

export default connect(mapStateToProps, {deleteFriend, selectFriend, toggleFriend})(Friends);