import React from "react";
import FriendForm from './FriendForm';

const Friend = ({ friend }) => {
    const { id, name, age, email } = friend;
    return (
        <div className="friend-card" key={id}>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Email: {email}</div>
            <div className='friend-btns'>
                {/* <div className='btn' onClick={() => this.editFriend(id, name, age, email)}>edit</div> */}
                {/* <div className='btn' id={id} onClick={this.deleteFriend}>delete</div> */}
            </div>
            {/* if updatingFriend is true then display: <FriendForm friend={friend}/> */}
        </div>
    )
}

export default Friend;