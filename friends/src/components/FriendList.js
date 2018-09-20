import React from 'react';
import Friend from './Friend';

const FriendList = props =>{
    // console.log(props.friends);
    return(
      <div className="friend-list">
        <h1>Friends List:</h1>
        <button name="form-button" 
                onClick={()=>props.history.push("/form")}>Add New Friend</button>
        {props.friends.map((friend, index) => (
            <Friend {...props}
                    key={index}
                    id={index}
                    friend={friend} 
                    handleDeleteFriend={props.handleDeleteFriend}
                    handleUpdateFriend={props.handleUpdateFriend}/>
          ))
        }
        
      </div>
    )
}

export default FriendList;
