import React from 'react';
import { loadFriends, removeFriend } from '../actions';
import { connect } from 'react-redux';
import Friends from './Friends';
import UpdateFriendForm from './UpdateFriendForm';

class FriendsContainer extends React.Component {
  state = {
    update: false,
    friend: {},
  }

  componentDidMount() {
    this.props.loadFriends();
  }

  toggleEdit = (index, name, age, email) => {
    this.setState({ update: !this.state.update, friend: { index, name, age, email }});
  }

  removeFriend = (index) => {
    this.props.removeFriend(index);
  }

  render() {
    console.log('update toggled? ', this.state.update);
    return (
      <div>
        <Friends friends={this.props.friends} loaded={this.props.loaded} toggleEdit={this.toggleEdit} removeFriend={this.removeFriend}/>
        { this.state.update ? <UpdateFriendForm friend={this.state.friend} /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.loadFriendsReducer.friends,
    loaded: state.loadFriendsReducer.loaded,
  };
};

export default connect(mapStateToProps, { loadFriends, removeFriend })(FriendsContainer);