import React from 'react'
import axios from 'axios'

class LoginForm extends React.Component {
    state={
        credentials:{
            username:'',
            password:''
        }
    }
    
    handleChange=e=>{
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]:e.target.value
            }
        });
    };
    handleOnClick=e=>{
        e.preventDefault();
        axios.post("http://localhost:5000/api/friends")
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleOnClick}>
                    <input type="text" name="username" onChange={this.handleChange} placeholder="username"/>
                    <input type="text" name="password" onChange={this.handleChange} placeholder="password"/>
                    <button>Login</button>
                </form>
            </div>
        );
    }; 
};      


export default LoginForm;