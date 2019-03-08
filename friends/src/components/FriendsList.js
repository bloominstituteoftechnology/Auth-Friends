import React from 'react';
import FriendCard from './FriendCard';

class FriendsList extends React.Component {
    
    
    
    
    render() {
        console.log(this.props.friends)
        return (
            <div>
                {this.props.friends.map(friend => {
                    return <FriendCard friend={friend} />
                })}
            </div>
        )
    }
}



export default FriendsList;