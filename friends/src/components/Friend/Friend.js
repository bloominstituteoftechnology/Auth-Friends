import React from "react";

const Friend = props => {
    if(props.friends.data) {
        const friend = props.friends.data.find(
            friend => `${friend.id}` === props.match.params.id
          );
        return (
                <>
                  <h2>{friend.name}</h2>
                  <p>{friend.age}</p>
                  <p>{friend.email}</p>
                  <button onClick={e => props.deleteFriend(e, friend.id)}>Delete Me</button>
                  <button>Update Me</button>
                </>  
        )
    } else {
        return (
            <h1>Loading </h1>
        )
    }
};

export default Friend;
