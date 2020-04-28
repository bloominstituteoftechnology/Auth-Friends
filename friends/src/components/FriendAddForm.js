import React, {  useState } from 'react';
import FriendsList from './FriendsList';
import  { addFriend } from '../actions'; 
import { connect } from 'react-redux';


function FriendAddForm (props) {
  const [fields, setFields] = useState({
    name: '',
    age: '',
    email: '',
    id:''
  })

const handleChange = (event) => {
  setFields({
    ...fields,
    [event.target.name]: event.target.value,
  })
} 

const handleSubmit = (event) => { 
  event.preventDefault()
  props.addFriend(fields);
  setFields({
    name: '',
    age: '',
    email: '',
    id:''
  })
}


    return (
      <div className="App">
        <h1>Friends</h1>
        <div>List</div>
        <form>
          <label> Add Friends to FriendsList:
            <br></br>
            <input
            name="name"
            onChange={handleChange}
            type="text"
            value={fields.name}
            placeholder="Name"
            />
             <input
            name="age"
            onChange={handleChange}
            type="text"
            value={fields.age}
            placeholder="age"
            
            />
             <input
            name="email"
            onChange={handleChange}
            type="text"
            value={fields.email}
            placeholder="email"
            />
            <input
            name="id"
            onChange={handleChange}
            type="text"
            value={fields.id}
            placeholder="id"
            />  

          </label>
          <button type="submit" onClick={handleSubmit}>Add</button>
        </form>
       <FriendsList/>
      </div>
    );
  
}

export default connect(null, { addFriend })(FriendAddForm);
