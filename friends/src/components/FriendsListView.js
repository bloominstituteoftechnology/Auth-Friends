import React from 'react';
import {connect} from 'react-redux';
import {getFriends, newFriend} from '../actions'
import FriendList from './FriendList'
import NewFriendForm from './NewFriendForm'

class FriendsListView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    // console.log('CDM', this.props)
    this.props.getFriends();
  }


  render() {
    return (
      <div>
        <NewFriendForm />
        <FriendList friends={this.props.friends} />
      </div>
     )
  }

}
const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}
// export default FriendsListView;
export default connect(
    mapStateToProps,
    {getFriends, newFriend}
    )(FriendsListView);
