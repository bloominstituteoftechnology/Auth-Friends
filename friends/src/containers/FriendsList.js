import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchFriends} from '../actions'
import {selectFriend} from '../actions'



class FriendsList extends Component {
    componentDidMount(){
        this.props.fetchFriends();
    }

    

    

    render(){console.log(this.props)
        return (
            <div>                
                <ul>
                    {this.props.friends.map(friend => {
                        return (
                             <li onClick = {() => 
                                this.props.selectFriend(friend.id)} 
                                key={friend.id}
                                className = {friend.selected ? "selected-friend friend" : "friend"}>
                                {friend.name}
                            </li>
                        ) 
                            
                    })}
                </ul>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return{
        friends: state.friendsReducer.friends,        
        saved: state.friendsReducer.friendsSaved
    }
}

export default connect(mapStatetoProps,{fetchFriends, selectFriend})(FriendsList)