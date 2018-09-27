import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';

const Friends = props => {
  return {
    
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
}

export default connect(mapStateToProps, {fetchFriends})(Friends);