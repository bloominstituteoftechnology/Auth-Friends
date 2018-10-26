

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
                    focus={props.focus === friend.id}
                    friend={friend}
                    onClick={props.onFocus}
                />
            ))}
        </div>
    );
}

//-- Friend - Implementation & Export ------------
export function Friend(props) {
    let classText = 'friend';
    if(props.focus){
        classText += ' friend_focus';
    }
    return (
        <div className={classText} onClick={props.onClick} data-id={props.friend.id}>
            <span>Name: {props.friend.name}</span>
            <span>Age: {props.friend.age}</span>
            <span>Email: {props.friend.email}</span>
        </div>
    );
}
