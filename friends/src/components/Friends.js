import React from 'react';
import {connect} from 'react-redux';
import {getFriends} from '../actions';


const Friends = props => {
    return (
        <div>
        {props.friends.map (friend =>
            <div className="friends">
            <h2> Name: {friend.name} </h2> 
            <h3> Age: {friend.age} </h3>
            <h3>Occupation:{friend.occupation}</h3>
            </div>
        )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
    error: state.friendsReducer.error,
    friends: state.friendsReducer.friends
    };
  };


export default connect(mapStateToProps, {
    getFriends
  })(Friends);

  


