
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
        return(
            <div className = 'friends-list-container'>
              <h1 className = 'friends-header'>Elegant Soiree Guest List :</h1> 
              <div className = 'friends-list'>
                {this.props.friends.map(friend =>{
                   return(
                       <Friend key={friend.id} friend = {friend}/>
                   )
               })}
                </div> 
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