import React, { useState, useEffect} from 'react'
import { axiosWithAuth } from "./../utils/axiosWithAuth";


const initialState = {
    
    name:'',
    age:'',
    email:''
}
const FriendFrom = (props) =>{
    const [formValues, setFormValues] = useState(initialState);

    const handleChange = (e) => {
        const value = e.target.value;
        setFormValues({
            ...formValues,
            [e.target.name]: value,
          })
    }
    const handleSubmit = (e) =>{
        const newFriend = {...formValues};
        e.preventDefault();
        console.log('****',props.setFriends)
        axiosWithAuth()
        .post('/friends', newFriend)
        .then((res) =>{
            
            props.setFriends(res.data)
            setFormValues(initialState)
        })
        .catch(err => console.log(err))
    }
 
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            name="age"
            value={formValues.age}
            onChange={handleChange}
            placeholder={'Age'}
          />
          <input
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="@Email"
          />
          <button>Submit</button>
        </form>
       </div>
    )

}

export default FriendFrom