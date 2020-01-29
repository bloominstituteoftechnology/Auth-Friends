import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friend = props => {
    const [friendEdit, setFriendEdit] = useState({
        name: props.homie.name,
        age: props.homie.age,
        email: props.homie.email
    })

    const [editMode, setEditMode] = useState(false);

    const deleteFriend = (e, id) => {
        e.preventDefault();
        axiosWithAuth().delete(`/friends/${id}`)
        .then(res => {
            // console.log(res)
        })
        .catch(err => console.log(err))
    }

    const handleChange = e => {
        setFriendEdit({
            ...friendEdit,
            [e.target.name]: e.target.value
        })
    }

    const editFriend = (e, id, values) => {
        e.preventDefault();
        axiosWithAuth().put(`/friends/${id}`, values)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h4>{props.homie.name}</h4>
            <p>{props.homie.age}</p>
            <p>{props.homie.email}</p>
            <div>
                <input type="text" name="name" value={friendEdit.name} onChange={handleChange} />
                <input type="text" name="age" value={friendEdit.age} onChange={handleChange} />
                <input type="email" name="email" value={friendEdit.email} onChange={handleChange} />
                {editMode && <button onClick={e => editFriend(e, props.homie.id, friendEdit)}>Confirm</button>}
                {editMode && <button onClick={() => setEditMode(false)}>Cancel</button>}
            </div>
            <button onClick={e => deleteFriend(e, props.homie.id)}>X</button>
            <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
    )
}

export default Friend;