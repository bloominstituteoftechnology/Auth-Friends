import React from 'react'



export default function Card(props) {


    return (
        <div>
            <h3>{props.friend.name}</h3>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
            <button id={props.id} onClick = {(e)=> props.handleDelete(e)} >Remove</button>
        </div>
    )
}
