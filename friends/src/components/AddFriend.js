import React from 'react'

const AddFriend = props => {

        return(

            <div>
            <form onSubmit={props.onSubmit}>

            <label>Name: </label>
            <input
            id="name"
            type="text"
            name="name"
            onChange={props.handleChange}
            />

             <label> Age: </label>
            <input
            id="age"
            type="number"
            name="age"
            onChange={props.handleChange}
            />

             <label> Email: </label>
            <input
            id="email"
            type="text"
            name="email"
            onChange={props.handleChange}
            />
            <button type='submit'>Add a Friend!</button>
            </form>
            </div>
        )
    }
export default AddFriend