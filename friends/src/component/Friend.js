
import React from "react";
import { connect } from 'react-redux';
import { deleteFriend } from '../actions'



const Friend = props => {

return(

    <div className = "friendDisplay">
        <h3> {props.friend.name}</h3>
        <p> age : {props.friend.age}</p>
        <p> email : {props.friend.email}</p>
        <button onClick={() => {props.deleteFriend(props.friend.id)}}>Delete</button>
        
    </div>

)



}



const mapStateToProps = (state) => {

    return { 
  
    }; 
  };
  
  
  export default connect(
    mapStateToProps, 
    { deleteFriend }
    )(Friend);