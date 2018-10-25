import React from 'react';
import '../App.css';


const Friends = (props) => {
    console.log("Friends Component : ", props.friends);
    return (
        <div>
            {props.friends.map((friend, index) => 
                <div className = "friend-data" key={friend.id}>
                     
                     <h3>Name :   {friend.name} </h3>
                     <p>Age :  {friend.age} </p>
                     <p> Email : <a href = {friend.email}> {friend.email} </a> </p>

                </div>
            )}
        </div>
    )
}

export default  Friends;