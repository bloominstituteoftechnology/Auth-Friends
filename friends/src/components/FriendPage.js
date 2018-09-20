import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friend from '../components/Friend';
import { fetchFriend } from '../actions';

class FriendPage extends Component {
  componentDidMount() {
    this.props.fetchFriend(this.props.match.params.id);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.fetching ? (
          <p>Reticulating Splines...</p>
        ) : (
          <ul className="FriendPage">
            <Friend friend={this.props.friend} />
          </ul>
        )}
        {this.props.error ? <p>{this.props.error}</p> : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  friend: state.friendsReducer.friends,
  fetching: state.friendsReducer.fetching,
  error: state.friendsReducer.error
});

export default connect(
  mapStateToProps,
  { fetchFriend }
)(FriendPage);
