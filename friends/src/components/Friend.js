import React from 'react';
import { deleteFriend } from './../actions';
import { connect } from 'react-redux';

const Friend = props => {
    return (
        <div>
           <h2> {props.friend.name}</h2>
           <p> {props.friend.age}</p>
            <p>{props.friend.email}</p>
            <button>Edit</button>
            <button onClick={()=>props.deleteFriend(props.friend.id)}>Delete</button>
        </div>

    )
}

const mapStateToProps = state => {
    return {
      friends: state.friends.friends
    }
  }
  
const mapActionsToProps = {
    deleteFriend: deleteFriend
  }

export default connect(mapStateToProps, mapActionsToProps)(Friend);
