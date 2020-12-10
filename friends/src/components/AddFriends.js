import React, {useState} from "react"
import {axiosWithAuth} from "../components/utils/axiosWithAuth"


function AddFriends(props){
  const {name, age, email} = props

  const [form, setForm] = useState({
        name:"",
        age:"",
        email:""
  })

  const handleChange = e => {
        e.preventDefault()
        setForm({
          ...form,
          [e.target.value]: e.target.name
        })
  }

  const addFriends = e => {
    axiosWithAuth()
    .post('/api/friends', form)
    .then(res => {
      console.log(res)
    })
    .catch(err =>{
      console.log(err.response, "There is a error")
    })

    return(
      <div>
          <h1>AddFriends Component</h1>
          <form onSubmit={addFriends}>
              <label>Name:</label>
              <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={handleChange}
              />
               <label>Age:</label>
              <input
                  type='text'
                  name='age'
                  value={age}
                  onChange={handleChange}
              />
               <label>Email:</label>
              <input
                  type='text'
                  name='email'
                  value={email}
                  onChange={handleChange}
              />
              <button>Add Friends</button>
          </form>
      </div>
    )
  }






}
export default AddFriends