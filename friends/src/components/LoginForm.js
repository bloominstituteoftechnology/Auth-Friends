import React, {useState} from 'react'
import axios from 'axios'


const initialValues = {
    username: 'Lambda School', //doing this because its harcoded in backend server
    password:'i<3Lambd4',
}

function LoginForm (props)  {
 
    const [formValues, setFormValues] = useState(initialValues)


const handleChange = (e) => {
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/login', formValues)
        .then((res) =>{
            localStorage.setItem('token', res.data.payload);
            props.history.push('/protected');
            console.log('this is res data in login',res.data)
        })
        .catch((err) => {
            console.log('failure in login post!!', err)
        })
}


return (
<div className='login-container'>
         <h1>Login To Friends App!</h1>

 <form onSubmit={handleSubmit}>

<input name='username' type='text' onChange={handleChange} value={formValues.username}>
</input>
<input name ='password' type='password' onChange={handleChange} value={formValues.password}>
</input>

<button>Login</button>

</form>
</div>
)
}

export default LoginForm;