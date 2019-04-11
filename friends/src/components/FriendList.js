import React, { Component } from 'react'
import Friend from './Friend'
import {connect} from 'react-redux'
import {getfriend} from '../actions/actions'
class FriendList extends Component {
    componentDidMount(){
        this.props.getfriend()
    }
  render() {
      
      
    return (
      <div>
       {this.props.friend.map( (friend, id) =>
        <Friend key ={id}friend ={friend}/>)}
      </div>
    )
  }
}
const mapStateToProps = state =>{
    console.log(state.friend)
    return{
        friend: state.friend
    }
}

export default connect (
    mapStateToProps,
    {getfriend}
)(FriendList)