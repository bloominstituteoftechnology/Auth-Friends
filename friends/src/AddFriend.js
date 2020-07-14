import React, {useState, useEffect} from 'react';
import {axiosWithauth} from "./api/axiosWithAuth";

const AddFriend = props =>{
    const [value, setValue] = useState({});

    const submitFriend = e =>{
        e.preventDefault();
        axiosWithauth().post('http://localhost:5000/api/friends', value)
            .then(res=>{
                console.log(res);
                props.history.push('/FriendsList');
            })
    }

    const handleChange = e =>{
        setValue({
            ...value,
            [e.target.name]:e.target.value,
        })
    }

    return(
        <div>
            <form onSubmit={submitFriend}>
                <input
                    type='text'
                    name='name'
                    value={value.name}
                    onChange={handleChange}
                    placeholder='Name'
                />
                <input
                    type='text'
                    name='age'
                    value={value.age}
                    onChange={handleChange}
                    placeholder='Age'
                />
                <input
                    type='text'
                    name='email'
                    value={value.email}
                    onChange={handleChange}
                    placeholder='email'
                />
                <button>Add Friend</button>
            </form>
        </div>
    )

}

export default AddFriend;