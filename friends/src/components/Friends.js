import React from 'react';
import FriendPage from './FriendPage';

import './Friends.css';

import { getFriends } from '../actions/friendAction'
import { connect } from 'react-redux'

class Friends extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         friends: [],
    //     }
    // }

    componentDidMount(){
        this.props.getFriends()
    }

    
    render(){
        return (
            <div className="friend-container">
                <h1> List of Friends here. </h1>
                {this.props.friends.map(friend => {
                    return (
                        <div key={friend.id}>
                            <FriendPage handleDeleteFriend={this.props.handleDeleteFriend}  friend={friend}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        error: state.error,
        loading: state.loading
    }
}


export default connect(mapStateToProps, { getFriends } )(Friends)
//export default Friends

