import React from 'react';
import { connect } from 'react-redux';
import Friend from './friend';
import { fetchFriends } from '../actions/actions'

class FriendsList extends React.Component{
    componentDidMount() {
        this.props.fetchFriends();
      }
      render(){
    return(
        <div>
            {this.props.friends.map(friend => 
            <Friend key={friend.id} friend={friend} />)}
        </div>
    )
  }
}
const mapStateToProps= state =>{
    return {
        friends: state.friends
    }
}
export default connect(mapStateToProps, {fetchFriends})( FriendsList );