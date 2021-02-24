import React, {useState} from 'react'
import axios from 'axios'
// import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialFormValues= {
    credentials: {
        username: "",
        password: ""
    }
}

const Login = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = (e) =>{
        setFormValues( {...formValues, [e.target.name] : e.target.value}
        )
    }

    const handleLogin = (e) =>{
        e.preventDefault();

        // const userLogin =  {
        //     username: "Lambda School",
        //     password: "i<3Lambd4"
        // }
        axios.post('http://localhost:5000/api/login', formValues)
        //axiosWithAuth().post("/login", userLogin)
            .then((resp)=>{
                
                localStorage.setItem("token", JSON.stringify(resp.data.payload))
                props.history.push('/friends');
            })
            .catch((err)=>{
                 console.log(err)
            })
        
    }


    return (
        <div>
            <form onSubmit={handleLogin} >
                <label>Name:
                    <input
                    type="text"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                    >
                    </input>
                </label>
                <label>Password:
                    <input
                    type="text"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    >
                    </input>
                </label>
                <button>submit</button>
            </form>
            
        </div>
    )
}

export default Login;
