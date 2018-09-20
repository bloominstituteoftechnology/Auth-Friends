import React from 'react';
//import proptypes

function Friend(props) {
    return (
        <div>
            {props.friends.map(friend => 
                <div  className="friend-cards" key={friend.email}>
                    <h3>Name: {friend.name}</h3>
                    <h5>Age: {friend.age}</h5>
                    <h6>Email: {friend.email}</h6>
                </div> 
            )}
        </div>
    )
}

//Friend.propTypes...

export default Friend; 

