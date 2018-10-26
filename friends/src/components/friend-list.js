

//== Presentational Components for Displaying Friends List =====================

//-- Dependencies --------------------------------
import React from "react";

//-- FriendList Component ------------------------
export function FriendList(props) {
    let loadNotifier;
    let classText = 'friend-list';
    if(props.loading){
        loadNotifier = (<div className="load-notifier">(Loading)</div>);
        classText += ' friend-list_loading';
    }
    return (
        <div className={classText}>
            {loadNotifier}
            {props.friends.map(friend => (
                <Friend
                    key={friend.id}
                    friend={friend}
                />
            ))}
        </div>
    );
}

//-- Friend - Implementation & Export ------------
export function Friend({friend}) {
    return (
        <div className="friend">
            <span>Name: {friend.name}</span>
            <span>Age: {friend.age}</span>
            <span>Email: {friend.email}</span>
        </div>
    );
}
