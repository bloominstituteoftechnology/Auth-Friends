import React from 'react';
import { connect } from 'react-redux';

import Friend from './Friend'

class Friends extends Component {
  render(){
    <div>
      {this.props.friends.map( friend => <Friend friend={friend} key={friend.id} />)}
    </div>
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
  }
}

export default connect(mapStateToProps)(Friends);