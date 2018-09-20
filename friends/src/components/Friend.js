import React from 'react';
import '../App.css';

const Friend = props =>{
    // console.log(props)
    return(
        <div className="friend">
            <button className="button delete-button"
                    onClick={(event)=>{
                            props.handleDeleteFriend(event,props.friend);
                        }}
                    >Delete</button>
            <button className="button update-button"
                    onClick={(event)=>{
                        props.handleUpdateFriend(event,props.friend.id);
                        props.history.push("/form");}}
                    >Update</button>
            <h2>{props.friend.id}</h2>
            <h2>{props.friend.name}</h2>
            <h2>{props.friend.age}</h2>
            <h2>{props.friend.email}</h2>
        </div>
    )
}

export default Friend;