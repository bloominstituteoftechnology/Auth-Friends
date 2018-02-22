import React from 'react';
import { loadFriend } from '../actions';

class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.loadFriend()
  }

  render() {

    return (
      <div>
        <Friends friends={this.props.friends}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state,
  };
};

export default connect(mapStateToProps, { loadFriend })(Friends);