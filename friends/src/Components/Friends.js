
import React from 'react';
import {connect} from 'react-redux';

import {fetchFriends} from '../actions/index';
import Friend from './Friend';

class Friends extends React.Component{
    
    componentDidMount(){
        this.props.fetchFriends()
    }
    render(){
        return(
            <div className = 'friends-container'>
               {this.props.friends.map(friend =>{
                   return(
                       <Friend key={friend.id} friend = {friend}/>
                   )
               })}
              
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{friends : state.friends}
}

export default connect(mapStateToProps, {fetchFriends})(Friends)