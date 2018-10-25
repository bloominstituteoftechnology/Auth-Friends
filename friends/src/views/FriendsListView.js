import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class FriendsListView extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ friends }) => {
  return {
    friends
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(FriendsListView);
