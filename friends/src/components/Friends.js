import React, { Component } from "react";
import { connect } from "react-redux";
import SelectedFriend from "./SelectedFriend";
import { deleteFriend, updateSingleFriend, toggleShowUpdate } from "../actions";
import UpdateFriendForm from "./UpdateFriendForm";
<<<<<<< HEAD
import logo from './logo.svg';
=======
>>>>>>> e17719758f5ddc3b0ef7ad616b06a428f23a2611

class Friends extends Component {
  constructor(props){
    super(props);

    this.state = {
    
    }
  }

  render(){
    return(
      <div className="friends">
        <ul className="friends__list">
          {this.props.friends.map(person => {
            return(
<<<<<<< HEAD
                <li className="friends__list__person" onClick={() => this.handleShowFriend(person)} key={person.id}>{person.name}</li>
								)})
=======
                <li className="friends__list__person" onClick={() => this.handleShowFriend(person)} key={person.id}>{friend.name}</li>
              )}
>>>>>>> e17719758f5ddc3b0ef7ad616b06a428f23a2611
          }}
        </ul>

        {Object.keys(this.props.friendSelected).length > 0 ? (
          <SelectedFriend
            handleShowFriend={this.handleShowFriend}
            toggleShowUpdate={this.toggleShowUpdate}
            handleDeleteFriend={this.handleDeleteFriend}
            selected={this.props.friendSelected}
          />
        ) : null}
        {this.props.showUpdate ? (
          <UpdateFriendForm friend={this.props.friendSelected} />
        ) : null}
        {this.props.deletingFriend ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    deletingFriend: state.friendsReducer.deletingFriend,
    error: state.friendsReducer.error,
    showUpdate: state.singleFriendReducer.showUpdate,
    friendSelected: state.singleFriendReducer.friendSelected
  }
}

<<<<<<< HEAD
export default connect(mapStateToProps, {deleteFriend, updateSingleFriend, toggleShowUpdate})(Friends);

=======
export default connect(mapStateToProps, {deleteFriend, updateSingleFriend, toggleShowUpdate})(Friends);
>>>>>>> e17719758f5ddc3b0ef7ad616b06a428f23a2611
