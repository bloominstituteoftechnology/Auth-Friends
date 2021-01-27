import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const initialStateValue={
    name:'',
    age:'',
    email:''
}

function Addfriend (){

const [addFriend, setAddFriend] = useState(initialStateValue)

const handleChange = (e)=> {
    setAddFriend({
        ...addFriend,
        [e.target.name]: e.target.value
        })
    }

const handleAddingFriend = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .post('http://localhost:5000/api/friends', addFriend)
    .then((res) => {
        localStorage.setItem('token', res.data.payload)
        setAddFriend(res.data)
    })
    .catch((err) =>{
        console.log('error posting new friend,', err)
    })
}

    return(
        <div className='addFriend'>
            <form onSubmit={handleAddingFriend}> 
            <label>Name:</label>
                <input 
                name='name'
                type='text'
                onChange={handleChange}
                value={addFriend.name}>
                </input>


                <label>Age:</label>
                <input 
                name='email'
                type='text'
                onChange={handleChange}
                value={addFriend.age}>
                </input>

                <label>Email:</label>
                <input
                name='email'
                type='email'
                onChange={handleChange}
                value={addFriend.email}
                ></input>
                <button disabled={!addFriend}>Add Friend!</button>
            </form>

        </div>
    )
}




export default Addfriend;