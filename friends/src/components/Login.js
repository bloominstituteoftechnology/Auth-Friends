// import e from 'express';
import React from 'react';

class Login extends React.Component {

  state = {
    credentials: {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      credentials: {
       ...this.state.credentials,
       [e.target.name]: e.target.value
      },
      error: ""
    })
  }

  login = (e) => {
    e.preventDefault();
    
  }

  render() {
    return(
      <div>
        <form onSubmit={this.login}>
          <input 
            style={{"margin" : "10px"}}
            type="text"
            name="username"
            placholder="Username"

            // value={e.target.value}
            onChange={this.handleChange}
          />

          <input 
            style={{"margin" : "10px"}}
            type="password"
            name="password"
            placeholder="Password"

            // value={e.target.value}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        {/* <p style={{ color: "red" }}>{this.state.error}</p> */}
      </div>
    )
  }
}

export default Login;