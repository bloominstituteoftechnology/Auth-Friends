import React from 'react'

 const FriendUpdate = (props) => {
    return (
      <div className="update">
        <h1>Update Friend!</h1>
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="updatedName" onChange={props.handleChange} value={props.updatedName} required></input>
                <input type="number" name="updatedAge" onChange={props.handleChange} value={props.updatedAge} required></input>
                <input type="email" name="updatedEmail" onChange={props.handleChange} value={props.updatedEmail} required></input>
                <button>Update!</button>
                <button type="button" onClick={props.cancelUpdate}>Cancel</button>
            </form>
      </div>
    )
}

export default FriendUpdate