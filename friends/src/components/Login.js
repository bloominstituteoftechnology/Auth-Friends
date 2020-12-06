import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';


class Login extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    /*
      1. connect to server with username/passowrd
      2. store the token that gets passed on successful login
      3. output an error when we have an unsuccessful login
    */
  
    login = e => {
      e.preventDefault();
      // login to server
      axiosWithAuth().post("http://localhost:5000/api/login", this.state.credentials)
        .then(res => {
          console.log('bk: Login.js: login: res: ', res)
          localStorage.setItem('token', res.data.payload)
          this.props.history.push('/protected')
        })
        .catch(err => {
          console.error(err.response)
        })
    };
  
    render() {
      return (
        <div>
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
      );
    }
  }
  
  export default Login;















// function Login() {

// const [state, setState] = useState({
//             username: '',
//             password: ''
//     })

//     const handleChange = e => {
//         const value = e.target.value;
//         setState({
//             ...state,
//             [e.target.name]: value
//         })

//     }



//     const login = (e,props) => {
//         e.preventDefault()
//         //logs into the server
//         axiosWithAuth().post("http://localhost:5000/api/login", state)
//         .then(res => {
//           console.log('al: Login.js: login: res: ', res)
//           localStorage.setItem('token', res.data.payload)
//           props.history.push('/protected')
//         })
//         .catch(err => {
//           console.error(err.response)
//         })

//     }

//     return (
//         <div>
//             <form onSubmit={login}>
//                 <input
//                 type="text"
//                 name="username"
//                 value={state.username}
//                 onChange={handleChange}
//                 />
//                 <input 
//                   type="text"
//                   name="password"
//                   value={state.password}
//                   onChange={handleChange}
//                   />
//                   <button>Log In</button>
//             </form>
//         </div>
//     )
// }

// export default Login
