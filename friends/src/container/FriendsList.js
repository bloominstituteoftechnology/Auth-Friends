import React from 'react';
import Friend from './Friend';
import UpdateForm from '../components/UpdateForm';

export default function FriendsList(props) {
    let temp = props.friends['0'];
    let friends= [];
    for (let i in temp){
        friends.push(temp[i]);
    }
    return (
        <div className="FriendsList">
            {friends.map(buddy=> <Friend key={buddy.id} values={buddy} />)}                  
            <UpdateForm />
        </div>
    )
}
        

