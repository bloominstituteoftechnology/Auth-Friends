import React from 'react'





export default function Add(props) {




    return (
        <div>
            <form onSubmit = {e=> props.handleSubmit(e)}>
                <input type="text" name="name" placeholder="Name" onChange={e => props.handleChange(e)} />
                <input type="email" name="email" placeholder="Email" onChange={e => props.handleChange(e)} />
                <input type="number" name="age" placeholder="Age" onChange={e => props.handleChange(e)} />
                <input type="submit" value="Add Friend" />
            </form>
        </div>
    )
}
