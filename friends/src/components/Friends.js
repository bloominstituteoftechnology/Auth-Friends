import React, { Component } from 'react';
import axios from 'axios';

//class Friends extends Component {
    // state = {
    //     friends: []
    // }
const Friends = props => {
   return (
            <div className="friends">
                {props.friends.map((friend, index) => {
                    return (
                        <ul key={index} className="friend">
                        <li>{friend.name}</li>
                        <li>{friend.age}</li>
                        <li>{friend.email}</li>
                        </ul>
                    )}
                )}
            </div>
    )
}

    

export default Friends;