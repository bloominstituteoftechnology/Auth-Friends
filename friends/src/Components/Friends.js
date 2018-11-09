
import React from 'react';
import {connect} from 'react-redux';

import {fetchFriends} from '../actions/index';
import Friend from './Friend';

import styles from '../css/friends.css';



class Friends extends React.Component{
    
    componentDidMount(){
        this.props.fetchFriends()
    }
    render(){
        console.log('Props',this.props)
        return(
            <div className = 'friends-container'>
              <h1>Elegant Soiree Guest List:</h1> 
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
    return{
        friends : state.friends
    }
}

export default connect(mapStateToProps, {fetchFriends})(Friends)