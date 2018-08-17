import React from 'react';
import Friend from './Friend';

class FriendsList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.friends.map(friend => {
                    return(
                        <div>
                            <Friend key={friend.id}
                                    friend={friend} />
                            <button onClick={this.props.submitUpdate}
                                    id={friend.id}>
                                Update Friend
                            </button>
                            <button onClick={this.props.submitDelete}
                                    id={friend.id}>
                                Delete Friend
                            </button>
                        </div>
                    )
                })}
            </ul>
    )}
}

export default FriendsList;