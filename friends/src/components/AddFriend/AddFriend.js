import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendModal from '../FriendModal/FriendModal';
import { addFriend } from '../../actions';

class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addButtonProps: {
        class: 'add',
        isIcon: false,
        innerHTML: 'Add Friend'
      }
    }
  };
  addAFriend = (friendObj) => {
    if (friendObj) {
      this.props.addFriend(friendObj);
    }
  };
  render() { 
    return ( 
      <div className="AddFriend">
        <FriendModal
          modalBtn={this.state.addButtonProps}
          modalTitle="Add Friend"
          actionTitle="Add"
          action={this.addAFriend}
        />
      </div>
     )
  }
}
 
export default connect(null, { addFriend })(AddFriend);