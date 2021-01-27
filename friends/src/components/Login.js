import axios from 'axios'
import React, {Component} from 'react'


  
export default class Login extends Component {
  
  state = {
    isLoading: true,
    errorMessage:"",
    credentials: {
      username: '',
      password:''
    }
  }
  
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", this.state.credentials)
    // "when I submit the login button, I'm going to post the new information to this API in the initialFormState view"
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.payload);
        //now that we have our token back, we want to save it and now we can make use of it in our app.
        this.props.history.push('/protected');
        // this.props has data info that we can access such as ".push" that we're wanting to "from history" push into our path into the protected route path
      })
      .catch(err=>{
        console.log(err.error);
        return this.setState({ errorMessage: "Must submit valid login details." })
      });
  }
  render() {
  return (
    <div className="form_box">
      
      <h3>Login Here!</h3>

      <form onSubmit={this.login}>
         <label>UserName: 
         <input type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}/>
        </label>
          
          <br/>
        <label>Password: 
         <input type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}/>
        </label>

        <br /><br />
        <p>{this.state.errorMessage}</p>
        <button>Login
        </button>
      </form>

    </div>
  )
}
}