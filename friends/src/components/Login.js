import React, { Component } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const LoginStyles = styled.div`


display: flex;
justify-content: center;
align-items: center;
width: 35rem;
height: 20rem;
padding: 3rem;

  .Link {
      font-weight: 300;
      color: black;
      text-decoration: none;
  }


  .mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 1rem;
    

    .header {
   
        
        width: 100%;
    
      h1 {
        
        color: black;
        font-weight: 300;
        letter-spacing: 1px;
        text-transform: uppercase;
       
      }
    }

    .inputOuterContainer {
        padding: 0.6rem;
        width: 100%;
    
        

      .inputContainer {
       
        margin: 2rem;
      }
    }

    button {
      text-align: center;
      width: 7rem;
      height: 3rem;
      font-size: 1rem;
      font-weight: 900;
      letter-spacing: 2px;
      background: white;
      border: none;
      color: black;
      text-transform: uppercase;

      &:hover {
        border: 1px solid black;
      }
    }

    .loginDiv {
        margin: 2rem;
        letter-spacing: 3px;
        font-weight: 600;
        font-size: 1.3rem;
        color: black;
    }
  }


`;

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200,
    }
  },
}));

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    },
    isFetching: false
  };

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  loggingIn = event => {
    event.preventDefault();
    this.setState({
      isFetching: true
    });
    axiosWithAuth()
    .post("http://localhost:5000/api/login", this.state.credentials)
    .then(response => {
        localStorage.setItem('token', response.data.payload);
        this.props.history.push('/protected');
    })
    .catch(error => console.log(error));
  };

  render() {
    return (
      <LoginStyles>
        <div className="mainContainer">
          <div className="header">
            <h1>Sign In</h1>
          </div>

          <form
            onSubmit={this.loggingIn}
            className={useStyles.root}
            noValidate
            autoComplete="off"
          >
            <div className="inputOuterContainer">
              <div className="inputContainer">
                <TextField
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.credentials.username}
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                 
                />
              </div>

              <div className="inputContainer">
                <TextField
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.credentials.password}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                 
                />
              </div>
            </div>

            <div>
              <button>Log In</button>
              <div className="loginDiv">
              {this.state.isFetching && "logging in..."}
              </div>
            </div>
          </form>
        </div>
      </LoginStyles>
    );
  }
}

export default Login;
