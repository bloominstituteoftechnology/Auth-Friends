import React from 'react';

const AddFriendForm=(props)=>{
return(
    <div>
        <h1>ADD A NEW PAL!!!</h1>
    <form onSubmit={props.submitHandler}>
        <input type="text" value={props.name}name="name" placeholder='text' onChange={props.changeHandlerName} ></input>
        <input type="number" value={props.age}name="age" placeholder='age' onChange={props.changeHandlerAge} ></input>
        <input type="email" value={props.email}name="email" placeholder='email' onChange={props.changeHandlerEmail} ></input>
        <button>SUBMIT NEW BESTY!!</button>
    </form>
    </div>
)

}

export default AddFriendForm;