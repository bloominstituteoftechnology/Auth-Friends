import React,{Component} from "react";
import {connect} from 'react-redux';





class ListOfFriends extends Component{
     constructor(props){
         super(props)
         this.state={


         }
  
     }

render(){
    return (
        <div>
         { this.props.friends.map((friend,id)=>{return <div key={friend.name}>{friend.name}</div>})}
        </div>
    )
}
}
 const mapStateToProps = (state )=>{
     console.log("1", state.friendsReducer.friends)
      return {
          friends: state.friendsReducer.friends

      }
 }

export default connect(mapStateToProps,{})(ListOfFriends);