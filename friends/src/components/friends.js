import React from 'react';


const Friend = props => {

    const deleteFriends = (event) => {
        props.delete(props.friend.id)
    } 
    return (
        <div>
            <h3>{props.friend.name}</h3>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
            <button onClick = {deleteFriends}> Delete {props.friend.name} </button>
        </div>
    )
}



export default Friend;