import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
 

function AddFriend(props) {

const {name, age, email} = props

const [state, setState] = useState({
    name: '',
    age: '',
    email: ''
})


const handleChange = e => {
    const value = e.target.value;
    setState({
        ...state,
        [e.target.name]: value
    })

}


const add = (e) => {
    e.preventDefault()
    //logs into the server
    axiosWithAuth().post("/api/friends", state)
    .then(res => {
      console.log('al: Login.js: login: res: ', res)
    })
    .catch(err => {
      console.error(err.response, 'error')
    })

}

    return (
        <div>
            <h1>Add Friend</h1>
            <form onSubmit={add}>
                <label>Name: </label>
                <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                />
                <label>Age: </label>
                <input 
                  type="text"
                  name="age"
                  value={age}
                  onChange={handleChange}
                  />
                <label>Email: </label>
                <input 
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  />
                  <button>Click to add friend</button>
            </form>
        </div>
    )
}

export default AddFriend
