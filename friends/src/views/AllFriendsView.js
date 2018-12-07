import React from 'react';
import{ connect } from 'react-redux';
import { fetchData } from '../Actions'
import AllFriends from '../Components/AllFriends';

class AllFriendsView extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render( ) {
    console.log('running the render function');
    return(
      <div className="AllFriendsBox">
        <AllFriends items={this.props.friends} fetchingFriends={this.props.isfetchingFriends} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends:this.friends,
  error: state.error,
  isfetchingFriends: state.isfetchingFriends,

});

export default connect(mapStateToProps, { fetchData }) (AllFriendsView);