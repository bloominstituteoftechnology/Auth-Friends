import React, { Component } from 'react';

class Friends extends Component {
    render() {
        <div>
            {this.props.friends.map(friend => {
                return(
                    <div key={friend.id}>
                        {friend.name}
                        {/* hello */}
                    </div>
                )
            })}
        </div>
    }
}

export default Friends;