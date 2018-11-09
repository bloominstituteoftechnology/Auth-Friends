import React from 'react'
import {connect} from 'react-redux';

const Friend = (props) =>{
    return(
        <div key = {props.friend.id}>
            <p>Name: {props.friend.name}</p>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export default Friend