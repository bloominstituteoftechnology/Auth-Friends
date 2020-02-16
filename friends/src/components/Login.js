import React, { useState } from "react";
import axios from 'axios';
import { Spinner } from 'reactstrap';

const Login = props => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

	const handleChange = e => {
		setLogin({ ...login, [e.target.name]: e.target.value });
  };
  
  const onSubmit = e => {
    e.preventDefault();
    setTimeout(() => {
      axios
        .post('/login', login)
          .then(res => {
            localStorage.setItem('token', res.data.payload)
            /* props.history.push('/path') */
            setLoading(true);
          })
          .catch(error => {
            console.log('None for You', error);
          });
    },  1000)
  };



     

	return (
		<section>
			<form onSubmit={onSubmit}>
				<input type="text" name="username" value={login.username} placeholder="Username" onChange={handleChange} />

				<input type="password" name="password" value={login.password} placeholder="Password" onChange={handleChange} />
       
          {loading===true ? <div><Spinner size="sm" color="success" /> <Spinner size="sm" color="success" /> <Spinner size="sm" color="success" /> </div> : <button>Log In</button>}
       
			</form>
		</section>
	);
};

export default Login;
