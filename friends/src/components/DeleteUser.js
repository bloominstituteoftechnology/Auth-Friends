import React, { useState } from 'react';
import axios from "axios"



export default function DeleteUser () {

    const initialState = {
        id:Date.now,
        name:"",
        age:"",
        email:""
    }

const [friend, setFriend] = useState(initialState)

const handleChange = e => {
    setFriend(
       {
        ...friend,
        [ e.target.name ] : e.target.value
      }
    );
  };
  const onSubmit = () =>{    
  axios
        .delete("http://localhost:5000/api/friends", friend.id)
            .then(response =>{
                setFriend(response.data)


            })
                .catch(err=>{
                    console.log(err)
                })

  }


    return (
       <div>
            <h2>Delete a Friend</h2>
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
      </form>
             <div>
                 <button onChange={handleChange}></button>
            </div>
        </div>
    )










}
