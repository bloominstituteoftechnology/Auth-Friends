import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friend from '../Components/Friend';
import { getFriends } from '../Actions/actions';

class FriendsList extends Component {
    componentDidMount(){
        this.props.getFriends();
      }

    render(){
        return(
        <div>
            {this.props.friends.map( friend =>
                < Friend friend={friend} key={friend.id} />
            )}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    friends: state.friends,
    error: state.error,
    loading: state.loading,
    }
  };
  
export default connect(mapStateToProps, { getFriends } )(FriendsList);