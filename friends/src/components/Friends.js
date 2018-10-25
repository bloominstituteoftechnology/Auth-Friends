import React from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';


class Friends extends React.Component {
  constructor(){
    super();
    this.state = {
      friends: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
    fetching: state.friendsReducer.fetching
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getFriends: () => dispatch(getFriends()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);