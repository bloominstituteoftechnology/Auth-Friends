import React from 'react';

import './Friends.css';

class Friends extends React.Component {

    render(){
        return (
            <div className="friend-container">
               <h1> List of Friends here. </h1>
                {this.props.friends.map(friend => {
                    return (
                        <div className="friend-card" key={friend.id}>
                            <h3> Name: {friend.name} </h3>
                            <p>Age: {friend.age} </p>
                            <p>Email: {friend.email} </p>
                            <p>ID: {friend.id} </p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Friends