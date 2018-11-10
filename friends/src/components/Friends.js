import React from 'react';
import FriendPage from './FriendPage';

import './Friends.css';

class Friends extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: ''
        }
    }

    

    

    render(){
        return (
            <div className="friend-container">
                <h1> List of Friends here. </h1>
                {this.props.friends.map(friend => {
                    return (
                        <div>
                            <FriendPage handleDeleteFriend={this.props.handleDeleteFriend}  friend={friend}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}




export default Friends

                        /* <div className="friend-card" key={friend.id}>
                            <h3> Name: {friend.name} </h3>
                            <p>Age: {friend.age} </p>
                            <p>Email: {friend.email} </p>
                            <p>ID: {friend.id} </p>
                            <div style={{cursor: "pointer"}} onClick={this.handleDelete}> X </div>
                        </div> */