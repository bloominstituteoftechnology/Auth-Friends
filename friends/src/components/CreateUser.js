import React,{ useState} from "react"
import axios from "axios"
import UpdateUser from "./UpdateUser"
import e from "cors"


export default CreateUser (props) {
    const initialState = {
        id:Date.now,
        name:"",
        age:"",
        email:""
    }

const [friend, setFriend] = useState(initialState)

const handleChange = e => {
    setForm(
       {
        ...friend,
        [ e.target.name ] : e.target.value
      }
    );
  };
  const onSubmit = (e) =>{
    e.preventDefault()
    axios.
        post("http://localhost:5000/api/friends", friend)
            .then(res=>console.log(res))
                setFriend(res.data)
                .catch(err=>console.log(err))
        
    }



    return (
        <>
       <div>
            <h2>Post a New Friend</h2>
            <form onSubmit={onSubmit}>
                <label>
                    <input
                     name="name"
                    value={friend.name}
                     onChange={handleChange}
                     />
                </label>
                <label>
                     <input
                     name="age"
                     value={friend.age}
                     onChange={handleChange}
                     />
                </label>
                 <label>
                    <input
                    name="email"
                    value={friend.email}
                     onChange={handleChange}
                     />
                </label>
      </div>
             <div>
                 <button></button>
            </div>
        </form>
       
        </>
    )










}
