import React, {Component} from 'react'; 
import '../App.css'; 
import SelectedFriend from './SelectedFriend'; 
import {connect} from 'react-redux'; 
import {updateSingleFriend, toggleShowUpdate} from '../actions'; 
import UpdateFriendsForm from './UpdatedFriendsForm'; 

class Friends extends Component {
    handleShowFriend = friend =>{
        this.props.updateSingleFriend(friend); 
    }; 
    toggleShowUpdate =()=>{
        this.props.toggleShowUpdate(); 
    }; 
    render(){
        return (
            <div className="Container">
            <ul>
            {this.props.friends.map(friend =>{
                return(
                    <ul onClick={() => this.handleShowFriend(friend)} key={friend.id}>
                    {friend.name}
                    </ul>
                );
            })}
            </ul>
            {Object.keys(this.props.friendSelected).length > 0 ? (
                <SelectedFriend
                handleShowFriend={this.handleShowFriend}
                toggleShowUpdate={this.toggleShowUpdate}
                selected={this.props.friendSelected}
                />
            ) : null}
            {this.props.showUPdate ? (
                <UpdateFriendsForm friend={this.props.friendSelected} />
            ) : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        error: state.friendsReducer.error, 
        showUpdate: state.singleFriendReducer.showUpdate, 
        friendSelected: state.singleFriendReducer.friendSelected
    };
};
export default connect(mapStateToProps, {
    updateSingleFriend, 
    toggleShowUpdate
})(Friends); 