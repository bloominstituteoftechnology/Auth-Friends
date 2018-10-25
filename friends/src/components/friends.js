import React from 'react';


const Friend = props => {

    const deleteFriends = (event) => {
        props.delete(props.friend.id)
    } 
    return (
        <div className = 'friends'>
            <h3>{props.friend.name}</h3>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
            <button className = 'buttondelete' onClick = {deleteFriends}> Delete {props.friend.name} </button>
        </div>
    )
}



export default Friend;