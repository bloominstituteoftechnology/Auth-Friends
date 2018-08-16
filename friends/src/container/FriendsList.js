import React from 'react';
import Friend from '../components/Friend';
import UpdateForm from './UpdateForm';

export default function FriendsList(props) {
    return (
        <div className="FriendsList">
            {this.props.friends.map(buddy=> <Friend>{/*{buddy.props}*/}</Friend>)}
            <UpdateForm />
        </div>
    )
}
        

