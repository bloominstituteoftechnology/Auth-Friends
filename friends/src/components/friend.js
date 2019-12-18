import React from 'react';
import { setCurrent, deleteFriend} from '../actions';
import { connect} from 'react-redux';

function Friend(props) {
    return (
    <div className="smurf-item">
      <h3>Name: {props.each.name}</h3>
      <p>Age: {props.each.age}</p>
      <p>email: {props.each.email}</p>
      <p>ID: {props.each.id}</p>
      <div className = 'btns'>
        <button className = 'btn-small' onClick= {() => props.setCurrent(props.each)}>Edit</button>
        <button className = 'btn-small delete' onClick = {() => props.deleteFriend(props.each)}>Delete</button>
      </div>
    </div>
    )
}


const mapStateToProps = () => {
    return {
       
    }
  }
  
  
  export default connect(mapStateToProps, {setCurrent, deleteFriend})(Friend)