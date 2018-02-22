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
        <Friends friends={this.props.friends}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.loadFriendsReducer.friends,
  };
};

export default connect(mapStateToProps, { loadFriend })(FriendsContainer);