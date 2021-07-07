import React,{useState,useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const Friends = () => {

    const [friendsList, setFriendsList] = useState([])
    const [addFriend,setAddFriend] = useState({
        name:"",
        age:"",
        email:'',
        id:(Date.now())
    })


    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => 
                setFriendsList(
                    res.data
                )          
            )
            .catch(err=> console.log(err))        
    },[])


    const handleChange = (e) => {
        setAddFriend({
            ...addFriend,
            [e.target.name]: e.target.value
        })
    }

    const addFriendSubmit = (e) => {

        e.preventDefault()
        axiosWithAuth()
            .post('api/friends',addFriend)
            .then(res => 
                setFriendsList(
                    res.data
                )          
            )
            .catch(err=> console.log("err",err)) 
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
            <button onClick={addFriendSubmit}>Add to the list!</button>


            {friendsList.map(friend => 
               <h3>{friend.name}</h3> 
            )}
        </>
    )
}

export default Friends