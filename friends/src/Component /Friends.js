import React, {Component} from 'react'; 
import './App.css'; 
import SelectedFriend from './SelectedFriend'; 
import {connect} from 'react-redux'; 
import {deleteFriends, updateSingleFriend, toggleShowUpdate} from '../Action '; 
import UpdateFriendForm from './UpdateFriendForm'; 

class Friends extends Component {
    handleDeleteFriend = () =>{
        const {id} = this.props.friendsSelected; 
        this.props.deleteFriends(id); 
    }; 

    handleShowFriend = friend =>{
        this.props.updateSingleFriend(friend); 
    }; 
    toggleShowUpdate =()=>{
        this.props.toggleShowUpdate(); 
    }; 
    render(){
        return (
            <div className="Container">
            <ul className="List">
            {this.props.friends.map(friend =>{
                return(
                    <li onClick={() => this.handleShowFriend(friend)} key={friend.id}>
                    {friend.name}
                    </li>
                );
            })}
            </ul>
            {Object.keys(this.props.friendSelected).length > 0 ? (
                <SelectedFriend
                handleShowFriend={this.handleShowFriend}
                toggleShowUpdate={this.toggleShowUpdate}
                handleDeleteFriend={this.handleDeleteFriend}
                selected={this.props.friendSelected}
                />
            ) : null}
            {this.props.showUPdate ? (
                <UpdateFriendForm friend={this.props.friendSelected} />
            ) : null}
            {this.props.deletingFriend ? (<h1>X</h1>): null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        deletingFriend: state.friendsReducer.deletingFriend, 
        error: state.friendsReducer.error, 
        showUpdate: state.singleFriendReducer.showUpdate, 
        friendSelected: state.singleFriendReducer.friendSelected
    };
};
export default connect(mapStateToProps, {
    deleteFriends,
    updateSingleFriend, 
    toggleShowUpdate
})(Friends); 