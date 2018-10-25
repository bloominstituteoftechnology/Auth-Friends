import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions/';


class Friends extends Component {

    handleDelete = (event, id) => {
        event.preventDefault();
        this.props.deleteFriend(id);
        document.location.reload(true);
    }
    render() {
        return (
            <div>
              {this.props.friends.map(friend => {
                return (
                    <div key={friend.id}>
                    <h2>{friend.name}</h2>
                    <p><strong>Age:</strong> {friend.age}</p>
                    <p><strong>Email:</strong> {friend.email}</p>
                    <button onClick={event => this.handleDelete(event, friend.id)}>
                        Delete
                    </button>
                    </div>
                )
              })}
            </div>
          );
    }
  
};

// const mapStateToProps = state => {
//     return {
//       friends: state.friendsReducer.friends,
//     }
//   }

export default connect(null, {
    deleteFriend
})(Friends)