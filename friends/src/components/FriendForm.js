import React from 'react';

const FriendForm = props =>{
    console.log(props)
  return (
    <div className="friend-form">
      <h2>Add New Friend:</h2> 
      <form>
        First name: 
        <input  type="text" 
                name="name" 
                value={props.friend.name} 
                onChange={props.handleChange} /><br></br>
        Age: 
        <input  type="number" 
                name="age" 
                value={props.friend.age} 
                onChange={props.handleChange} /><br></br>
        E-mail: 
        <input  type="text" 
                name="email" 
                value={props.friend.email} 
                onChange={props.handleChange} />

        <button className="save-button" 
                onClick={event => {   
                  props.handleSaveFriend(event);
                  props.history.push("/");
                  }}>
                Save</button>
      </form>
    </div>
  )
}

export default FriendForm;