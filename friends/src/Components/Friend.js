import React from 'react'
import {connect} from 'react-redux';

const Friend = (props) =>{
    return(
        <div key = {props.id}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default Friend