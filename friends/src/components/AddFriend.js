import React from 'react';

export const AddFriend = () => {

    return (
        <form 
        onSubmit={this.addFriend}>
            <input
            type="text"
            name="name"
            value={props.friends.name}
            onChange={this.newName}
            placeholder="name"
            />
            <button>Add</button>
        </form>
    )
}