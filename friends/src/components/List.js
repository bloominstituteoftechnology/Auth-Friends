import React, {Component} from 'react';
import {connect} from 'react-redux';
import Friend from './Friend';
import {deleteFriend} from '../actions/actions';

class List extends Component {
    
    render() { 
        return (  
            <div className="friends-list">
      
            {this.props.fetchingFriends ? (
              <h1>Getting friends at the moment.....</h1>
            ) : null }
    
              
                {this.props.friendsFetched ? (
                  this.props.friends.map((friend, index) => 
                    <Friend
                      key={index}
                      name={friend.name.toUpperCase()}
                      age={friend.age}
                      email={friend.email}
                    />
                    )
                ): null }         
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      friends: state.friends,
      fetchingFriends: state.fetchingFriends,
      friendsFetched: state.friendsFetched
    }
  }
 
export default connect(mapStateToProps, {deleteFriend})(List);