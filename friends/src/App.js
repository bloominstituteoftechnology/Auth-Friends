import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from './actions';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

class App extends Component {

  componentWillMount() {
    console.log('cm');
    this.props.getFriends();
  }

  render() {
    const { friends } = this.props;
    return (
      <div>
        {/* {this.props.fetchingFriends ? (<h1>Fetching friends</h1>) : null} */}
        <FriendForm />
        <FriendsList friends={friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('Friends: ', state);
  return {
    friends: state.friends,
    fetching: state.fetching,
  }
}

export default connect(mapStateToProps, { getFriends })(App);
