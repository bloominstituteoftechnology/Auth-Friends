import React,{useState,useEffect} from "react"
import axios from "axios"
import api from "./api"

const Account = props => {
    const [friends,setFriends] = useState([])
    const [friend,setFriend] = useState({
        name:"",
        age:"",
        email:"",
        id:""
    })
    useEffect(() => {
api().get("http://localhost:5000/api/friends")
.then(res => {
    console.log(res.data)
setFriends(
   res.data
)

})
.catch(err => console.log(err))
    },[])
    console.log(friends)
    const handleChange = e => 
    {
       setFriend({
           ...friend,
           [e.target.name]:e.target.value
       })
    }
    const handleSubmit = e => {
        e.preventDefault()
        api().post("http://localhost:5000/api/friends",friend)
        .then(
            res => setFriends(res.data)
            
        )
        .catch(err => console.log(err))
    }
    const handleDelete = e => {
        e.preventDefault()
        api().delete(`/api/friends/${friend.id}`)
        .then(
            res => {
            localStorage.setItem("friends",res.data.payload)
            setFriends(res.data)
            }
        )
        .catch(err => console.log(err))
    }
    const handleEdit = e => {
        e.preventDefault()
        api().put(`/api/friends/${parseInt(friend.id)}`,friend)
        .then(
            res => setFriends(res.data)
        )
        .catch(err => console.log(err))
    }
console.log(friend)
    return (

<form onSubmit={handleSubmit}>
    My friends
    {friends.map(i => <p key={i.id}>{i.id}:{i.name}</p>)}
    <input placeholder="name" onChange={handleChange} name="name" value={friend.name}/>
    <input placeholder="age" onChange={handleChange} name="age" value={friend.age}/>
    <input placeholder="email" onChange={handleChange} name="email" value={friend.email}/>
    <input placeholder="id" onChange={handleChange} name="id" value={friend.id}/>
    <button>Add New Friend</button>
    <button onClick={handleDelete}>Delete Friend</button>
    <button onClick={handleEdit}>Edit Friend</button>
   </form>

/* </form>
<form onSubmit={handleDelete}>
<input placeholder="id" onChange={handleChange} name="id" />
<button>Delete friend</button>
</form>
{/* <form>
<input placeholder="id" onChange={handleChange} name="id"/>
<input placeholder="name" onChange={handleChange} name="name" value={friend.name}/>
    <input placeholder="age" onChange={handleChange} name="age" value={friend.age}/>
    <input placeholder="email" onChange={handleChange} name="email" value={friend.email}/>
 <button onClick={handleEdit}>Edit friend</button>
</form> */

    )
}
export default Account 