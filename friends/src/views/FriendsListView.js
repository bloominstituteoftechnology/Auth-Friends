import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, addFriend, deleteFriend } from '../actions';
import ReactLoading from 'react-loading';
import { Route, withRouter } from 'react-router-dom';

import FriendsList from '../components/FriendsList';
import FriendsForm from '../components/FriendsForm';
class FriendsListView extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    if (this.props.fetching) {
      return (
        <div className="loaderContainer">
          <ReactLoading
            type={'spin'}
            color={'#000'}
            height={'20%'}
            width={'20%'}
          />
        </div>
      );
    }
    return (
      <div className="friendsListViewContainer">
        <Route
          path="/friends-form"
          render={props => (
            <FriendsForm {...props} addFriend={this.props.addFriend} />
          )}
        />
        <FriendsList
          friends={this.props.friends}
          deleteFriend={this.props.deleteFriend}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ friends, fetching }) => {
  return {
    friends,
    fetching
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchData, addFriend, deleteFriend }
  )(FriendsListView)
);
