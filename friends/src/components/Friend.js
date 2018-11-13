import React from 'react';
import {connect} from 'react-redux';
import {deleteFriend} from '../actions/action';

const Friend = (props) => {
    return(
      
        <div className='friend'>
            <h1>{props.friend.name}'s details:</h1>
            <h2><span>Name:</span>{" "}{props.friend.name}</h2>
            <h2><span>Email:</span>{" "}{props.friend.email}</h2>
            <h2><span>Age:</span>{" "}{props.friend.age}</h2>
            <p>Id # {props.friend.id}</p>
            <div className="del" onClick={() => {props.deleteFriend(props.friend.id)}}>X</div>
        </div>
    )
}

// export default Friend;

const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {deleteFriend})(Friend);