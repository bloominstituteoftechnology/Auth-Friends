import React, { Component } from 'react';
import Loading from './Loading'




export class Friends extends Component {
    render() {
        return (
            <div>
                {this.props.fetchingFriends ? <Loading /> : this.props.friends.map(friend => {
                    return <div key={friend.id}>{`${friend.name} ${friend.age} ${friend.email}`}</div>
                })}
            </div>
        )
    }
}
