import React from 'react';
import { connect } from 'react-redux';

import Friend from './Friend';
import { fetchFriends } from '../actions';

import './FriendsList.scss';

class FriendsList extends React.Component {

  componentDidMount() {

    this.props.fetchFriends();

  }

  render() {

    const { friends, fetching, error } = this.props;

    console.log(error);

    if (fetching)
      return <h1>Fetching friends...</h1>;

    return (

      <div className='friends-list'>

        {friends.map((friend, id) => <Friend key={id} friend={friend} />)}

      </div>

    );

  }

}

function mapStateToProps(state) {

  return {

    friends: state.friends,
    fetching: state.fetching,
    error: state.error

  }

}

export default connect(mapStateToProps, { fetchFriends })(FriendsList);
