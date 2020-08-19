import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'; 

const initialState = {
    id: uuid(),
    name: "",
    age: "",
    email: "",
}

const FriendForm = () => {
    const [newFriend, setNewFriend] = useState(initialState); 

    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <form>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Name</label>
                <input type="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Name"
                />
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Age</label>
                <input type="age" 
                    className="form-control" 
                    id="age" 
                    placeholder="Age"
                />
            </div>
            <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" 
                   className="form-control" 
                   id="email" 
                   aria-describedby="emailHelp" 
                   placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
            >
                Send Request
            </button>
        </form>
    </div>
    )
}

export default FriendForm; 
