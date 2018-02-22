import React from 'react';
import { loadFriend } from '../actions';
import { connect } from 'react-redux';
import Friends from './Friends';

class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.loadFriend();
  }

  render() {
    console.log('container props', this.props);
    return (
      <div>
        <Friends friends={this.props.friends} loaded={this.props.loaded}/>
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

export default connect(mapStateToProps, { loadFriend })(FriendsContainer);