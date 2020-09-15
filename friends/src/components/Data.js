import React, {useState, useEffect} from 'react'
import FriendsList from './FriendsList'

import {axiosWithAuth} from '../utils/axiosWithAuth'
const initialValues = {
    name:'',
    age:0,
    email: ''
  } 

const Data = () => {
    const [friends, setFriends] = useState([])
    const [values, setValues] = useState(initialValues)
    console.log(values)

    const getData = (e) => {
        e.preventDefault();
        axiosWithAuth()
          .get('/api/friends')
          .then(res => {
            setFriends(res.data)
          })
          .catch(err => console.log(err));
      };
      const handleChanges = (event) => {
    
        setValues({...values,[event.target.name] : event.target.value });
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axiosWithAuth()
          .post('/api/friends', values)
          .then(res => {
            setFriends(res.data)
          })
          .catch(err => console.log(err));
   
      };

    





    return (
        <div className='data'>
            <div className="inputfetch">
                <button onClick={getData}>Fetch Data!</button>
                <input type="text" name="name" value={values.name} onChange={handleChanges} placeholder="name"  />
                <input type="number" name ="age" value={values.age} onChange={handleChanges} placeholder="age"  />
                <input type="email" name ="email" value={values.email} onChange={handleChanges} placeholder="email"  />
                <button onClick={handleSubmit}>Add New Friend</button>  
            </div>
            
            <div className="results">
                <h1>Friends:</h1>
                {friends.map(friend =>(
                    <FriendsList key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    )
}


export default Data;
