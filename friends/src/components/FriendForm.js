import React from 'react';

const FriendForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="name" onChange={props.handleChange} value={props.name} required></input>
            <input type="number" name="age" onChange={props.handleChange} value={props.age} required></input>
            <input type="email" name="email" onChange={props.handleChange} value={props.email} required></input>
            <button>Add!</button>
        </form>
    )
}

export default FriendForm;