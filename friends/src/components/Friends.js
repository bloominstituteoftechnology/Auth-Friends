import React,{useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import e from 'express'

const Friends = () => {

    const [friendsList, setFriendsList] = useState([])
    const [addFriend,setAddFriend] = useState({
        name:"",
        age:"",
        email:''
    })

    axiosWithAuth()
        .get('/api/friends')
        .then(res => 
            setFriendsList(
                 res.data
            )
            // console.log('friendslist',res.data)            
        )
        .catch(err=> console.log(err))

    const handleChange = (e) => {
        setAddFriend({
            ...addFriend,
            [e.target.name]: e.target.value
        })
        
    }

    return(
        <>
        <h1>Friennnnnnds</h1>
            <lable>
                Add A Friend
                <input name='name' placeholder='Name' onChange={handleChange}/>
                <input name='age' placeholder='Age' onChange={handleChange}/>
                <input name='email' placeholder='Email' onChange={handleChange}/>
            </lable>
            <button>Add to the list!</button>


            {friendsList.map(friend => 
               <h3>{friend.name}</h3> 
            )}
        </>
    )
}

export default Friends