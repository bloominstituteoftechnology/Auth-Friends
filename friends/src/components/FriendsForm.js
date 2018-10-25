import React from 'react'



const FriendForm = props => {
 const {name, age, email} = props.friendInfo
    return (
        <div>
        <input 
        placeholder="...Name"
        type="text"
        name="name"
        onChange={props.handleChange}
        value={name}
        
        />
          <input 
        placeholder="...Age"
        type="number"
        name="age"
        onChange={props.handleChange}
        value={age}
        
        />
          <input 
        placeholder="...Email"
        type="text"
        name="email"
        onChange={props.handleChange}
        value={email}
       
        />
        
        <button onClick={props.handleAddNewFriend}>Add new friend</button>

        </div>
    )
}


export default FriendForm