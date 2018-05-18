import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import { friendReducer } from '../reducers/friendReducer';

class Friends extends Component {
    componentDidMount(){
        this.props.fetchFriends()
      }
      render(){
        console.log('props',this.props)
          return (
            <div>
            <ul>
                {this.props.friends.map(friend => {
                    return <li key={friend.id}>{friend.name}</li>
                })};
            </ul>
        </div>
        );
    };
}const mapStateToProps = (state) => {
    console.log('STATE', state)
    return {
       friends: state.friendReducer.friends,
       friendsFetched: state.friendReducer.friendsFetched,
       fetchingFriends: state.friendReducer.fetchingFriends
    }
  }
  


  export default connect(mapStateToProps, {fetchFriends}) (Friends);
  