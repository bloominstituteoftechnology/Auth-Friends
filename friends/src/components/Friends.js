import React, { Component } from 'react';
import './Friends.css';

import { connect } from 'react-redux';
import { fetchFriends } from  '../actions/index';

class Friends extends Component {
 

    componentDidMount() {
        this.props.fetchFriends();
    }

    render() { 
        console.log('props:', this.props)
        return ( 
            <div className="friend-container">
                {this.props.fetchingFriends ? (
                    <span>Fetching Friends</span>
                ) : (
                    <ul>
                        {this.props.friends.map(friend => {
                            return(
                                <div key={friend.id} className="friend-card">
                                    <h2>{friend.name}</h2>
                                    <h4>{friend.email}</h4>
                                    <h4>{friend.age}</h4>
                                    <h4>{friend.id}</h4>
                                </div>
                            ) 
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