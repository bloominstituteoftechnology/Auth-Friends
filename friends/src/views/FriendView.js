import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { deleteFriend, fetchFriendById, editFriend  } from '../actions';
import Friend from '../components/Friend';
import Form from '../components/Form';

class FriendView extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    const friendid = this.props.match.params.id;
    this.props.fetchFriendById(friendid);

  }

  goHome = () => {
    this.props.history.push('/');
    window.location.reload();
  }

  render() {
    if (!this.props.friend) {
      return <h1>FriendView Getting friend...</h1>
    } else {
      return (
        <div className='friend-view'>

          <div className='home-button button' onClick={this.goHome}>
          <i className="fas fa-home"/>
          </div>

          <Friend friend={this.props.friend} delete={this.props.deleteFriend} history={this.props.history} />

          <Route path='/:id/edit' render={(props) => (<Form {...props} friend={this.props.friend} submit={this.props.editFriend} />)} />
        </div>
      )
    }
  }

}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    friend: state.friendsReducer.friend
  };

}

export default connect(
  mapStateToProps,
  { deleteFriend, fetchFriendById, editFriend }
)(FriendView);
