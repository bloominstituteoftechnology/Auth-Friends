import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';

class FriendsList extends Component {

    componentDidMount () {
        this.props.fetchFriends();
    }


    render() {
        return (
        
            <ul>
                {this.props.friends.map(friend => {
                return  <li key = {friend}> {friend.name} </li>;
            })}
            </ul>
        )
    }

    



}

const mapStateToProps = state => {
    return {
        friends: state.friends
    };
  };
  
export default connect(mapStateToProps, { fetchFriends })(FriendsList);
  