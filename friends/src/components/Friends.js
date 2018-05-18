import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchFriends } from  '../actions/index';

class Friends extends Component {
 

    componentDidMount() {
        this.props.fetchFriends();
    }

    render() { 
        console.log('props:', this.props)
        return ( 
            <div>
                {this.props.fetchingFriends ? (
                    <span>Fetching Friends</span>
                ) : (
                    <ul>
                        {this.props.friends.map(friend => {
                            return <li key={friend.name}>{friend.name}</li>;
                        })}
                    </ul>
                )}
            </div>
         )
    }
}
 
const mapStateToProps = state => {
    console.log('State:', state)
    return {
        friends: state.friendReducer.friends,
        fetchingFriends: state.friendReducer.fetchingFriends
    }
  }
  
  export default connect(mapStateToProps, { fetchFriends } )(Friends);