import React, { Component } from 'react';

import './App.css';

class Friends extends Component {
    render() {
        <div>
            {this.props.friends.map(friend => {
                return(
                    <div key={friend.id}>
                        {friend.name}
                    </div>
                )
            })}
        </div>
    }
}

export default Friends;