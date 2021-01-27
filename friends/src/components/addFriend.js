import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialStateValue={
    name:'',
    age:'',
    email:''
}

function Addfriend (props){

const [addFriend, setAddFriend] = useState(initialStateValue)

const handleChange = (e)=> {
    setAddFriend({
        ...addFriend,
        [e.target.name]:e.target.value
        })
    }

const handleAddingFriend = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .post('/friends', addFriend)
    .then((res) => {
            setAddFriend(res.data)
    })
    .catch((err) =>{
        console.log('error posting new friend,', err)
    })
}

    return(
        <div className='addFriend-container'>

            <form onSubmit={handleAddingFriend}> 
            <label>Name:</label>
                <input 
                name='name'
                type='text'
                onChange={handleChange}
                value={addFriend.name}
                >
                </input>


                <label>Age:</label>
                <input 
                name='age'
                type='text'
                onChange={handleChange}
                value={addFriend.age}
                >
                </input>

                <label>Email:</label>
                <input
                name='email'
                type='email'
                onChange={handleChange}
                value={addFriend.email}
                >
                </input>
                <button type='submit'disabled={!addFriend} >Add Friend!</button>
            </form>

        </div>
    )
}




export default Addfriend;