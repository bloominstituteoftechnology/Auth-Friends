import React, { Component } from 'react';
// need this to see the state
import { connect } from 'react-redux';
// need to import the action that allows me to get all those friends
import { getFriends } from '../Store/Actions';
// need to import friend so that i can present the data in friendsList
import Friend from './Friend';

class FriendsList extends Component {

    componentDidMount() {

        this.props.getFriends();

    }

    render() {
        console.log('running render function');
        if (this.props.isFetching) {
          return  <h2>Hold your horses, we are loading.</h2>
        }
        return (
        this.props.friends.map(friend => 
          <div className="friends-list-wrapper">
            <Friend {...this.props} key={friend.id} friend={friend} />
          </div>)
        );
      }

}

const mapStateToProps = (state) => ({
    friends: state.friends,
    error: state.error,
    isFetching: state.isFetching,

});

export default connect(
  mapStateToProps, { getFriends })(FriendsList);



