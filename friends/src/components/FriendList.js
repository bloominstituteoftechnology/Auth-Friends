import React from 'react';

const FriendList=(props)=>{
    return(
        <div>{props.friends.map(
            (friend)=>{
                return(<div>{friend.name}<br></br>
                    {friend.age}<br></br>
                    {friend.email}

                </div>)
            }
            
        )}</div>
    )
}

export default FriendList;