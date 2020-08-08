import React,{useState} from 'react'


const Login = () => {

    const [user,setUser] = useState({})

    const HandleChange = (e) => {
        setUser({
            [e.target.name]: e.target.value
        })
    }

    const submitLogin=(e) => {
        e.preventDefault()
        setUser({
            username:'',
            password:''
        })

    }
    // console.log('userState',user)
    return(
        <form onSubmit={submitLogin}>
        <label>
            UserName
           <input  name='username' value={user.username} type='text' onChange={HandleChange}/> 
        </label>
        <label>
            Password
           <input name='password' value={user.password} type='password' onChange={HandleChange}/> 
        </label>
        <button>Login</button>
        </form>
    )
}

export default Login