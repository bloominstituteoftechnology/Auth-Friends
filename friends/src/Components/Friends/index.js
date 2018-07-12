import React from 'react';
import Friend from './Friend';

export default class friends extends React.Component {

    render() {
        return (
            <div>
                {this.props.friends.map(friend => {
                    return (
                        <div className="list__Item" key={friend.id}>
                            <Friend
                                {...this.props}
                                id={friend.id}
                                name={friend.name}
                                age={friend.age}
                                email={friend.email}
                                updateFriend={this.props.updateFriend}
                                deleteFriend={this.props.deleteFriend}
                            />
                        </div>)
                })}
            </div>
        );
    }
};