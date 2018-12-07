import React from "react";
import Form from "./Form"

const Friends = (props) => {
    return(
        <>
            <Form/>
            {
                props.friends.map(friend => (
                    <div className="friend" key={friend.id}> 
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                    )
                )
            }
            
        </>
    );
}
export default Friends;