import React,{Component} from 'react'
import '../App.css'

const Friend = (props) => {

    return (
        <div className='friend-format'>
            <h3> {props.name} </h3>
            <h3> {props.age} </h3>
            <h3> {props.email} </h3>

        </div>
    )
}

export default Friend