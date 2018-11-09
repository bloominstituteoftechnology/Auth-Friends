import React, {Component} from 'react';
import {connect} from 'react-redux'

import fetchFriends from '../Actions/fetchFriends'
import Friend from './Friend'

class FriendsList extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        this.props.fetchFriends();
    }

    render(){
        
        if(this.props.loading){
            return <div>Loading...</div>
        }
        if(this.props.error !== null){
            return <div>{this.props.error}</div>
        }
        return(
            <div>
                {this.props.friends.map(friend =>{
                    return <Friend friend={friend} key={friend.id}/>
                })}
            </div>
        )

    }

}

const mapStateToProps = state =>{
    return {
        friends: state.friends,
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchFriends})(FriendsList)

