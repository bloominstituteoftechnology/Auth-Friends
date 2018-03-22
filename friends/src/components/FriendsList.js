import React, { Component } from 'react';
import { connect } from 'react-redux';

// pull in actions from action/index
import { get_friends, delete_friend } from '../actions';

class FriendsList extends Component {
    componentDidMount() {
      this.props.get_friends();
    }
  
    render() {
      return (
        <React.Fragment>
          {/* FriendsList */}
          {this.props.fetchFriends ? (
            <p>Fetching...</p>
          ) : (
            <React.Fragment>
              {this.props.friends.map(friend => {
                return <div className='Friend' key={`${friend.name} ${friend.id}`}>
                  <h3>{friend.name}</h3>
                  <p>{friend.age}</p>
                  <p>{friend.email}</p>
                  <div>
                    <button>Edit Friend</button>
                    <button onClick={() => this.props.delete_friend(friend.id)}> Delete Friend</button>
                  </div>
                </div>
              })}
            </React.Fragment>
          )}
        </React.Fragment>
      );
    }
  
  } // end of App class

  const mapStateToProps = state => {
    return {
      fetchFriends: state.fetchFriends,
      friends: state.friends,
    };
  };
  
  export default connect(mapStateToProps, { get_friends, delete_friend })(FriendsList);