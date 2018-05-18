import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-css';
import FriendCard from '../FriendCard/FriendCard';
import { fetchFriends } from '../../actions';
import './FriendsList.css';

class FriendsList extends Component {
  componentDidMount(){
    this.props.fetchFriends();
  };
  render() {
    const friendCards = this.props.friends.map(friend => <FriendCard key={friend.id} friend={friend} />);
    const masonryBreakpoints = {
      default: 4,
      1200: 3,
      992: 2,
      576: 1
    };
    return (
      <div className="friends-list">
        <Masonry
          breakpointCols={masonryBreakpoints}
          className="friends-masonry-grid"
          columnClassName="friends-masonry-grid_column">
          {friendCards}
        </Masonry>
      </div>
    );
  };
}

const mapDispatchToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetchingFriends
  }
};
 
export default connect(mapDispatchToProps, { fetchFriends })(FriendsList);