import React from 'react';
import { connect } from 'react-redux';

import Friend from './Friend'
import { getFriends } from '../actions/index';

class Friends extends React.Component {

  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    return (
      <div>
        {this.props.friends.map( friend => <Friend friend={friend} key={friend.id} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
  }
}

export default connect(mapStateToProps, { getFriends })(Friends);