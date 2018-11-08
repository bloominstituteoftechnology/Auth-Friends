import React, { Component } from 'react';
import { connect } from 'react-redux';

import Friend from './Friend';

// Will need to import action
import { getFriends } from '../actions/';

class Friends extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFriends();
  }

  render(){
    // Verified data is being loaded via react dev tools.
    return(
      <div>
        { this.props.loading ? <h1 className='fullAlert'>LOADING...</h1> : null }
        { this.props.error !== '' ? <h1 className='fullAlert'>{this.props.error}</h1> : null }
        { this.props.friends.map( (friend) =>
          <Friend friend={friend} key={friend.id} />  
        )}
      </div>
    );
  }
};

// Need mapStateToProps to pull in info to pass on to each friend:
const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    error: state.error,
    loading: state.loading
  };
};

// Finish the connection by passing to connect:
export default connect(mapStateToProps, { getFriends })(Friends);