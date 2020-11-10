import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useState } from 'react';

const Login = () => {

    const initalCreds = {
        credentials: {
            username: "",
            password: ""
        }
    }
    const [credInput, setCredInput] = useState(initalCreds);

    const handleChange = e => {
        setCredInput({
            credentials: {
                ...credInput.credentials, 
                [e.target.name]: e.target.value
            }
        });
    }
   

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="username"
                    value={credInput.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={credInput.password}
                    onChange={handleChange}
                />
          <button>Log in!</button>
            </form>
        </div>
    )

}

export default Login;