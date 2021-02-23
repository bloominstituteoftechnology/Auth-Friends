import React, {useState} from 'react'
import axios from 'axios'

const initialFormValues= {
    username: "",
    password: "",
}

const Login = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = (e) =>{
        setFormValues(
            {...formValues, [e.target.name] : e.target.value}
        )
    }

    const handleLogin = (e) =>{
        e.preventDefault();

        const userLogin =  {
            username: "Lambda School",
            password: "i<3Lambd4"
        }
        axios.post("http://localhost:5000/api/login", userLogin)
            .then((resp)=>{
                console.log(resp, "RESPONSE")
            })
            .catch((err)=>{
                console.log("ERR", err)
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
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    >
                    </input>
                </label>
            </form>
            
        </div>
    )
}

export default Login;
