import React, { useState } from 'react';

const Friend = ({ friend, deleteFriend, editFriend }) => {
  const [edit, setEdit] = useState(false);

  const editForm = () => {
    setEdit(true)
  }

  return (
    <div style={{padding: '20px', fontSize: '20px', marginTop: '20px', border: '0.5px solid #8282a0',
                borderRadius: '4px', textAlign: 'center', alignItems: 'center', 
                width: '450px', margin: '20px'}}>
      <div style={{display: edit ? 'none' : null, 
                   width: '450px', margin: '0 auto'}}>
        <p>{friend.name}</p>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
      </div>
        {edit ? (<EditForm editFriend={editFriend} setEdit={setEdit} values={{name: friend.name, age: friend.age, email: friend.email, id: friend.id}}/>) : null}
        <div style={{marginBottom: '10px', display: edit ? 'none' : null}}>
          <button onClick={() => deleteFriend(friend.id)}>Delete</button>
          <button onClick={editForm}>Edit</button>
        </div>
    </div>
   
  )
}
export default Friend;

function EditForm(props) {
  const [values, setValues] = useState({name: props.values.name, age: props.values.age, email: props.values.email});

  const handleChange = (e) => {
    setValues({...values, [e.target.name] : e.target.value})
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '0.3px solid black', 
                 padding: '20px', fontSize: '20px', marginTop: '20px',
                 borderRadius: '4px', textAlign: 'center'}}>
      <form onSubmit={() => {
                      props.editFriend(props.values.id, values);
                      props.setEdit(false)
                      }} 
            style={{display: 'flex', flexDirection: 'column'}}>
        <input type="text" 
              name="name" 
              placeholder="name" 
              value={values.name} 
              onChange={handleChange}/>
        <input type="text" 
              name="age" 
              placeholder="age" 
              value={values.age}
              onChange={handleChange}/>
        <input type="text" 
              name="email" 
              placeholder="email" 
              value={values.email}
              onChange={handleChange}/>
        <div>
          <input className="form-btn"  type="submit" value="EDIT" />
          <button className="form-btn" >CANCEL</button>
        </div>
      </form>
    </div>
  )
}

