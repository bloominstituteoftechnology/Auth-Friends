import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class Friends extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1> Lambda Friends</h1>
        {this.props.friends.map(item => {
          return <h1>{item.name}</h1>;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    err: state.friendsReducer.err,
    fetching: state.friendsReducer.fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
