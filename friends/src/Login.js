import React,{useState} from "react"
import api from "./api"

const Login = props => {
    const [error,setError] = useState()
const [data,setData] = useState({
    username:"",
    password:""
})
const [isLoading,setLoading] = useState("")
const handleChange = e => {
    setData({
        ...data,
        [e.target.name]:e.target.value

    })
    console.log(data)
}
// { username: 'Lambda School', password: 'i<3Lambd4' }
const handleSubmit = e => {
    e.preventDefault()
    console.log(data)
    api()
    .post("/api/login",
        data
    )
.then(res => {
    localStorage.setItem("token",res.data.payload)
    props.history.push("/Account")
    console.log(res.data.payload)
})
.catch(err => setError(err))
}

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="error">error</div>}
        <input placeholder="username" value={data.username} name="username" type="username" onChange={handleChange}/>
        <input placeholder="Password" value={data.password} name="password" type="password" onChange={handleChange}/>
        <button>Submit</button>
        </form>
    )
}
export default Login