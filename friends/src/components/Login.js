import axios from 'axios'
import React, {useState} from 'react'

const initialFormState = {
    username: '',
    password: '',
}
  
  
export default function Login () {
  const [formState, setFormState] = useState(initialFormState)
  const [loadingState, setLoadingState] = useState(true)

  const handleChange = e => {
  setFormState({...formState, [e.target.name]: e.target.value})
}

  const handleLoad = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", formState)
    // "when I submit the login button, I'm going to post the new information to this API in the initialFormState view"
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
      })
      .catch(err=>{
        console.log(err);
      });
}
  return (
    <div>
      
      <h2>Login Here!</h2>

      <form onSubmit={handleLoad}>
        <label>UserName:
         <input type="name"
            name="username"
            value={handleChange}/>
        </label>
      
        <label>Password:
         <input type="password"
            name="password"
            value={handleChange}/>
        </label>
      
        <button>Submit
        </button>
      
      </form>

    </div>
  )

}